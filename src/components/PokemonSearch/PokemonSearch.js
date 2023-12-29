import { useState, useEffect, useCallback } from "react";
import { pokemonDetails } from "../../services/pokeApi";
import { PokemonListItem } from "../PokemonList/PokemonListItem";
import styled from "styled-components";
import { colors, size } from "../../data/variables";
import { Loading } from "../Loading/Loading";
import debounce from "lodash/debounce";

export const PokemonSearch = () => {
    const [searchPoke, setSearchPoke] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearchPokemon = (event) => {
        setSearchPoke(event.target.value);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = useCallback(debounce(async () => {
        if (searchPoke) {
            setLoading(true);
            try {
                const data = await pokemonDetails(searchPoke);
                setPokemonData(data);
            } catch (error) {
                alert("The Pokémon you searched for doesn't exist, or there might be a typo. Please double-check the name and try again with another one.");
            } finally {
                setLoading(false);
            }
        } else {
            setPokemonData(null);
        }
    }, 1000), [searchPoke]);

    useEffect(() => {
        fetchData();
        return () => fetchData.cancel();
    }, [searchPoke, fetchData]);

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
                placeholder="Search for a pokemon by name or number"
                data-testid="pokemonSearch"
            />
            {loading && <Loading loading={loading} />}
            {searchPoke.trim() !== '' ? (
                pokemonData && <PokemonListItem id={pokemonData.id} name={pokemonData.name} />
            ) : null}
        </>
    );
};

const Input = styled.input`
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