import { useEffect, useState } from "react";
import { pokemonTypes } from "../../../services/pokeApi";
import { PokemonListItemFiltered } from "../../PokemonList/PokemonListItem";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";

export const FilterTypeButton = () => {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [pokemonData, setPokemonData] = useState([]);
    const [typeLimits, setTypeLimits] = useState({});
    
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

    const fetchPokemonData = async (type, loadMore = false) => {
        try {
            const response = await fetch(type.url);
            const data = await response.json();
            const currentLimit = typeLimits[type.name] || 10;
            const newData = loadMore
                ? data.pokemon.slice(currentLimit, currentLimit + 10)
                : data.pokemon.slice(0, currentLimit);
            setPokemonData((prevData) => (loadMore ? [...prevData, ...newData] : newData));
            setSelectedType(type.name);

            if (loadMore) {
                setTypeLimits((prevLimits) => ({
                    ...prevLimits,
                    [type.name]: currentLimit + 10,
                }));
            } else {
                setTypeLimits((prevLimits) => ({
                    ...prevLimits,
                    [type.name]: 10,
                }));
            }
        } catch (error) {
            console.error('Error fetching Pokémon data', error);
        }
    };

    const handleTypeClick = async (type) => {
        if (selectedType === type.name) {
            setPokemonData([]);
            setSelectedType(null);
        } else {
            setPokemonData([]); 
            await fetchPokemonData(type);
        }
    };

    const handleLoadMoreClick = () => {
        fetchPokemonData(types.find((type) => type.name === selectedType), true);
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
                    <ol>
                        {pokemonData.map((pokemon) => (
                            <PokemonListItemFiltered
                                key={pokemon.pokemon.name}
                                url={pokemon.pokemon.url}
                                name={pokemon.pokemon.name}
                            />
                        ))}
                    </ol>
                    <LoadMoreButton onClick={handleLoadMoreClick} />
                </div>
            )}
        </div>
    );
};