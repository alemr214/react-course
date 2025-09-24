import axios from "axios";
import { useEffect, useState } from "react";
import type { PokemonResponse } from "../03-example/interfaces/pokemon.response";

interface Props {
    id: number;
}

interface Pokemon {
    id: number;
    name: string;
    image: string;
}

export const usePokemon = ({ id }: Props) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);

    const getPokemon = async (id: number) => {
        const response = await axios.get<PokemonResponse>(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const { data } = response;

        setPokemon({
            id: id,
            name: data.name,
            image: data.sprites.front_default,
        });
    };

    useEffect(() => {
        getPokemon(id);
    }, [id]);

    return {
        // Props
        pokemon,

        // Methods
        getPokemon,
    };
};
