import type { KeyboardEvent } from "react";
import { useState, useEffect } from "react";

interface Props {
    type: string;
    placeholder?: string;
    button_text?: string;
    onQuery: (query: string) => void;
}

export const SearchBar = ({
    type,
    placeholder,
    button_text,
    onQuery,
}: Props) => {
    // To control the input value
    const [query, setQuery] = useState("");

    // To implement the debounce
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [query, onQuery]);

    // To pass as a reference in the call and clean the input
    const handleSearch = () => {
        onQuery(query);
        setQuery("");
    };

    // To handle the "Enter" key event
    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") handleSearch();
    };

    return (
        <div className='search-container'>
            <input
                type={type}
                placeholder={placeholder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyUp={handleKeyUp}
            />
            <button onClick={handleSearch}>{button_text}</button>
        </div>
    );
};
