import { useState, useEffect } from "react";
import { pokemonDetails } from "../../services/pokeApi";
import { PokemonListItem } from "../PokemonList/PokemonListItem";
import { PokemonList } from "../PokemonList/PokemonList";

export const PokemonSearch = () => {
    const [searchPoke, setSearchPoke] = useState("");
    const [pokemonData, setPokemonData] = useState(null);

    const handleSearchPokemon = (event) => {
        setSearchPoke(event.target.value);
    };

    useEffect(() => {
        const fetchData = async () => {
            if (searchPoke) {
                const data = await pokemonDetails(searchPoke);
                setPokemonData(data);
            } else {
                setPokemonData(null);
            }
        };

        fetchData();
    }, [searchPoke]);

    return (
        <>
            <input
                type="text"
                id="searchPoke"
                name="searchPoke"
                onChange={handleSearchPokemon}
                value={searchPoke}
                placeholder="Pesquisar um pokemon pelo nome ou numero na pokedex"
            />
            {searchPoke.trim() !== '' ? (
                pokemonData && <PokemonListItem id={pokemonData.id} name={pokemonData.name} />
            ) : (
                // renderiza na tela se a pesquisa tiver vazia, retirar se tiver lento pra carregar a lista
                <PokemonList />
            )}
        </>
    );
};
