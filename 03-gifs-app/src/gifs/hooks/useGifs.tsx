import { useRef, useState } from "react";
import { mockGifs } from "../../mock-data/mockGifs";
import { getGifByQuery } from "../actions/get-gif-by-query.action";
import type { Gif } from "../interfaces/gif.interface";

const MAX_PREVIOUS_SEARCHES = 8;

export const useGifs = () => {
    const [previousSearches, setPreviousSearches] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>(mockGifs);

    const gifsCache = useRef<Record<string, Gif[]>>({});

    const handlePreviousSearch = async (item: string) => {
        if (gifsCache.current[item]) {
            setGifs(gifsCache.current[item]);
            return;
        }

        const gifs = await getGifByQuery(item);
        setGifs(gifs);
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

        gifsCache.current[normalizedQuery] = gifs;
    };
    return {
        gifs,
        previousSearches,
        handlePreviousSearch,
        handleSearch,
    };
};
