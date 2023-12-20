import { useState, useEffect } from "react";
import { pokemonDetails } from "../../services/pokeApi";
import { PokemonListItem } from "../PokemonList/PokemonListItem";
import styled from "styled-components";
import { colors, size } from "../../data/variables";

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
                autoComplete="off"
                onChange={handleSearchPokemon}
                value={searchPoke}
                placeholder="Search for a pokemon by name or number in the pokedex"
            />
            {searchPoke.trim() !== '' ? (
                pokemonData && <PokemonListItem id={pokemonData.id} name={pokemonData.name} />
            ) : null }
        </>
    );
};

const Input = styled.input `
    font-size: 25px;
    padding: 10px;
    border-radius: 15px;
    border: none;
    background-color: ${colors.fourthBlue};
    color: white;
    border: 2px solid white;
    &::placeholder {
        color: grey;
    }
    
    @media (min-width: ${size.mobileS}) {
        width: 80%;
    }

    @media (min-width: ${size.laptopL}) {
        width: 50%;
    }

    @media (min-width: ${size.desktopL}) {
        width: 50%;
        padding: 30px;
        font-size: 40px;
    }
`