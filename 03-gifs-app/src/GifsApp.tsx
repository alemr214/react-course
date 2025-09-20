import { GifsGrid } from "./gifs/components/GifsGrid";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
    const { gifs, previousSearches, handlePreviousSearch, handleSearch } =
        useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader
                title='Gifs App'
                subtitle='Encuentra los mejores gifs'
            />

            {/* Searcher */}
            <SearchBar
                type='text'
                placeholder='Busca un gif...'
                button_text='Buscar'
                onQuery={handleSearch}
            />

            {/* History */}
            <PreviousSearches
                title_history='Historial'
                items={previousSearches}
                onLabelClicked={handlePreviousSearch}
            />

            {/* Gifs Grid */}
            <GifsGrid gifs={gifs} />
        </>
    );
};
