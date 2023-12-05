import { useState, useEffect } from "react";
import { pokemonDetails } from "../../services/pokeApi";
import { PokemonListItem } from "../PokemonList/PokemonListItem";
import { PokemonList } from "../PokemonList/PokemonList";
import styled from "styled-components";

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
            <Input
                size={50}
                type="text"
                id="searchPoke"
                name="searchPoke"
                onChange={handleSearchPokemon}
                value={searchPoke}
                placeholder="Pesquisar um pokémon pelo nome ou número na pokedex"
            />
            {searchPoke.trim() !== '' ? (
                pokemonData && <PokemonListItem id={pokemonData.id} name={pokemonData.name} />
            ) : (
                // renderiza na tela se a pesquisa tiver vazia, retirar se tiver lento pra carregar a lista
                // <Section>
                    <PokemonList />
                // </Section>
            )}
        </>
    );
};

const Input = styled.input `
    font-size: 25px;
    padding: 10px;
    border-radius: 15px;
    border: none;
    background-color: #120C38;
    color: white;
`

// const Section = styled.section `
//     display: flex;
//     width: 100%;
//     justify-content: center;
//     flex-direction: column;
// `
