import axios from "axios";
import type { Gif } from "../interfaces/gif.interface";
import type { GiphyResponse } from "../interfaces/giphy.response";

export const getGifByQuery = async (query: string): Promise<Gif[]> => {
    const response = await axios.get<GiphyResponse>(
        "https://api.giphy.com/v1/gifs/search",
        {
            params: {
                q: query,
                limit: 10,
                lang: "es",
                api_key: "",
            },
        }
    );

    console.log(response.data);

    const gifs: Gif[] = response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: parseInt(gif.images.original.width),
        height: parseInt(gif.images.original.height),
    }));

    return gifs;
};
