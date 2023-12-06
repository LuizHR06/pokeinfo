import { useEffect, useState } from "react";
import { pokemonTypes } from "../../../services/pokeApi";
import { PokemonListItemFiltered } from "../../PokemonList/PokemonListItem";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";
import styled, { css } from "styled-components";

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
            <ContainerTittle>
            <Tittle>Filtrar Pokemons por tipo</Tittle>

            </ContainerTittle>
            <ContainerTypeButtons>
            {types.slice(0, types.length - 2).map((type) => (
                <TypeButtons
                    key={type.name}
                    id={type.name}
                    name={type.name}
                    onClick={() => handleTypeClick(type)}
                >
                    {type.name}
                </TypeButtons>
            ))}
            </ContainerTypeButtons>
            {selectedType && (
                <ContainerLista>
                    <ContainerTittle>
                        <Tittle type={selectedType}>Pokémon of type {selectedType}</Tittle>
                    </ContainerTittle>
                    <ContainerFilteredPokemon>
                        {pokemonData.map((pokemon) => (
                            <PokemonListItemFiltered
                                key={pokemon.pokemon.name}
                                url={pokemon.pokemon.url}
                                name={pokemon.pokemon.name}
                            />
                        ))}
                    </ContainerFilteredPokemon>
                    <ContainerButton>
                        <LoadMoreButton onClick={handleLoadMoreClick} />
                    </ContainerButton>
                </ContainerLista>
            )}
        </div>
    );
};

const  buttonColors = (typeName) => {
    switch (typeName) {
        case 'normal':
            return '#aa9'
        case 'fighting':
            return '#b54'
        case 'flying':
            return '#89f'
        case 'poison':
            return '#a59'
        case 'ground':
            return '#db5'
        case 'rock':
            return '#ba6'
        case 'bug':
            return '#ab2'
        case 'ghost':
            return '#66b'
        case 'steel':
            return '#aab'
        case 'fire':
            return '#f42'
        case 'water':
            return '#39f'
        case 'grass':
            return '#7c5'
        case 'electric':
            return '#fc3'
        case 'psychic':
            return '#f59'
        case 'ice':
            return '#6cf'
        case 'dragon':
            return '#76e'
        case 'dark':
            return '#754'
        case 'fairy':
            return '#e9e'
        default:
            return 'white';
    }
}

const ContainerTittle = styled.div `
    background-color: #9E000B;
`

const Tittle = styled.h3 `
    font-size: 30px;  
    padding: 10px;
    margin: 10px;
    color: ${props => buttonColors(props.type)};
    -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
    background-color: #d0eae9;
    border-radius: 10px;
    border: 2px solid black;
    display: inline-block;
`

const TypeButtons = styled.button`
    padding: 10px 20px;
    margin: 10px 10px;
    border-radius: 10px;
    border: none;
    font-weight: 800;
    font-size: 15px;
    text-transform: uppercase;
    border: 2px solid black;
    cursor: pointer; 
    background-color: ${props => buttonColors(props.name)};
    &:hover {
        filter: brightness(80%);
    }
`

const ContainerTypeButtons = styled.div `
    padding: 30px;
`

const ContainerFilteredPokemon = styled.ol `
    display: flex;
    justify-content: center;
    flex-wrap: wrap;   
    overflow-y: auto;  
`

const ContainerLista = styled.div`
    background-color: #6399B8;
    border: 2px solid black;
    width: 100%;
    max-width: 90%;
    margin: 0px auto 50px auto;     
    border-radius: 10px;
`

const ContainerButton = styled.div `
    padding: 50px 0 20px 0;
`