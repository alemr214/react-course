import { GifsGrid } from "./gifs/components/GifsGrid";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { mockGifs } from "./mock-data/mockGifs";
import { useState } from "react";
import { getGifByQuery } from "./gifs/actions/get-gif-by-query.action";
import type { Gif } from "./gifs/interfaces/gif.interface";

const MAX_PREVIOUS_SEARCHES = 8;

export const GifsApp = () => {
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>(mockGifs);

    const handlePreviousSearch = (item: string) => {
        console.log("Search for:", item);
    };

    const handleSearch = async (query: string) => {
        const normalizedQuery = query.trim().toLowerCase();

        if (query.length === 0) return;

        if (previousSearches.includes(normalizedQuery)) return;

        setPreviousSearches((prev) => [
            normalizedQuery,
            ...prev.slice(0, MAX_PREVIOUS_SEARCHES),
        ]);

        const gifs = await getGifByQuery(normalizedQuery);
        setGifs(gifs);
    };
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
