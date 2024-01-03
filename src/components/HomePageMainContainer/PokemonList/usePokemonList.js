import { useEffect, useState } from "react";
import { getPokemonList } from "../../../services/pokeApi";

export const usePokemonList = (limit, offset) => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPokemonList(limit, offset);
                const newPokemonArray = data.results;

                setPokemons((prevPokemons) => (
                    offset === 0
                        ? newPokemonArray.map(pokemon => ({ id: extractPokemonId(pokemon.url), name: pokemon.name }))
                        : [...prevPokemons, ...newPokemonArray.map(pokemon => ({ id: extractPokemonId(pokemon.url), name: pokemon.name }))]
                ));
            } catch (error) {
                console.error("Error fetching data", error);
            }
        };

        fetchData();
    }, [limit, offset]);

    const extractPokemonId = (url) => {
        const parts = url.split("/");
        return parts[parts.length - 2];
    };

    return pokemons;
};