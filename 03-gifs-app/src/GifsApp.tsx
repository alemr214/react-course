import { GifsGrid } from "./gifs/GifsGrid";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { mockGifs } from "./mock-data/mockGifs";

export const GifsApp = () => {
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
            />

            {/* History */}
            <PreviousSearches
                title_history='Historial'
                items={["One Punch", "Samurai X", "Dragon Ball"]}
            />

            {/* Gifs Grid */}
            <GifsGrid gifs={mockGifs} />
        </>
    );
};
