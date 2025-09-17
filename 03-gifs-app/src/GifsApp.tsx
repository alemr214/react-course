import { GifsGrid } from "./gifs/GifsGrid";
import { PreviousSearches } from "./gifs/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { mockGifs } from "./mock-data/mockGifs";
import { useState } from "react";

const handlePreviousSearch = (item: string) => {
    console.log("Search for:", item);
};

const handleSearch = (query: string) => {
    console.log("Searching for:", query);
};

export const GifsApp = () => {
    const [previousSearches, setPreviousSearches] = useState([
        "Cats",
        "Dogs",
        "Memes",
    ]);

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
            <GifsGrid gifs={mockGifs} />
        </>
    );
};
