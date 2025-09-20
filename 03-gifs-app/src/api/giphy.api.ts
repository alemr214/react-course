import axios from "axios";

const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
if (!apiKey) {
    throw new Error(
        "GIPHY API key is missing. Please set VITE_GIPHY_API_KEY in your environment variables."
    );
}

export const giphyAPI = axios.create({
    baseURL: "https://api.giphy.com/v1/gifs",
    params: {
        api_key: apiKey,
        lang: "es",
    },
});
