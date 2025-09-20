import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";
import { giphyAPI } from "../../api/giphy.api";

const GIF_SEARCH_LIMIT = 15;

export const getGifByQuery = async (query: string): Promise<Gif[]> => {
    const response = await giphyAPI<GiphyResponse>("/search", {
        params: {
            q: query,
            limit: GIF_SEARCH_LIMIT,
        },
    });

    const gifs: Gif[] = response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: parseInt(gif.images.original.width),
        height: parseInt(gif.images.original.height),
    }));

    return gifs;
};
