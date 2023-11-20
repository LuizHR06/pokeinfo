// FilterTypeButton.js
import React, { useEffect, useState } from "react";
import { pokemonTypes } from "../../../services/pokeApi";
import { PokemonListItema } from "../../PokemonList/PokemonListItem";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";

export const FilterTypeButton = () => {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [pokemonData, setPokemonData] = useState([]);
    const [limit, setLimit] = useState(10);
    const [url, setUrl] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await pokemonTypes();
                const typesData = data.results;
                setTypes(typesData);
            } catch (error) {
                console.error('Error fetching information', error);
            }
        };

        fetchData();
    }, []);

    const fetchPokemonData = async (type) => {
        try {
            const response = await fetch(type.url);
            const data = await response.json();
            const limitedPokemonData = data.pokemon.slice(0, limit);
            setPokemonData(limitedPokemonData);
            setSelectedType(type.name);
            setUrl(type.url)
        } catch (error) {
            console.error('Error fetching Pokémon data', error);
        }
    };

    useEffect(() => {
        fetchPokemonData(url)
    }, [limit])

    const handleTypeClick = (type) => {
        setLimit(10);
        setPokemonData([]);
        fetchPokemonData(type);
    };

    const handleLoadMoreClick = () => {
        setLimit(limit + 10);
    };

    return (
        <div>
            {types.map((type) => (
                <button
                    key={type.name}
                    id={type.name}
                    name={type.name}
                    onClick={() => handleTypeClick(type)}
                >
                    {type.name}
                </button>
            ))}
            {selectedType && (
                <div>
                    <h2>Pokémon of Type {selectedType}</h2>
                    <ul>
                        {pokemonData.map((pokemon) => (
                            <PokemonListItema
                                key={pokemon.pokemon.name}
                                url={pokemon.pokemon.url}
                                name={pokemon.pokemon.name}
                            />
                        ))}
                    </ul>
                    <LoadMoreButton onClick={handleLoadMoreClick} />
                </div>
            )}
        </div>
    );
};