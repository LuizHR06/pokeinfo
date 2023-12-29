import { useEffect, useState } from "react";
import { pokemonTypes } from "../../../services/pokeApi";
import { PokemonListItemFiltered } from "../../PokemonList/PokemonListItem";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";
import styled from "styled-components";
import { ButtonColors } from "./buttonColors";
import { colors, size } from "../../../data/variables";
import { Loading } from "../../Loading/Loading";

export const FilterTypeButton = () => {
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [pokemonData, setPokemonData] = useState([]);
    const [typeLimits, setTypeLimits] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); 
                const data = await pokemonTypes();
                const typesData = data.results;
                setTypes(typesData);
            } catch (error) {
                console.error('Error fetching information', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchPokemonData = async (type, loadMore = false) => {
        try {
            setLoading(true)
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
        } finally {
            setLoading(false); 
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
        <div data-testid="filter-type-buttons">
            <TittleHeader>Filter Pokemon by type</TittleHeader>
            {loading && <Loading loading={loading} />}
            {!loading && (
                <>
                    <ContainerTypeButtons>
                        {types.slice(0, types.length - 2).map((type) => (
                            <TypeButtons
                                data-testid="type-button"
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
                        <ContainerList>
                            <ContainerTittle>
                                <TittlePokemonFiltered type={selectedType}>Pokémon of type {selectedType}</TittlePokemonFiltered>
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
                        </ContainerList>
                    )}
                </>
            )}
        </div>
    );
};

const ContainerTittle = styled.div`
    background-color: ${colors.secondaryRed};
`

const TittleHeader = styled.p`
    margin: 20px;
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    background-color: ${colors.secondaryRed};
    border-radius: 10px;
    border: 2px solid black;
    display: inline-block;
    font-weight: bold;
    letter-spacing: 2px;

    @media (min-width: ${size.mobileS}) {
        font-size: 20px;
        padding: 10px 80px;
        -webkit-text-stroke-width: 0;
    }

    @media (min-width: ${size.tablet}) {
        font-size: 40px;
        -webkit-text-stroke-width: 1px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 50px;
        padding: 10px 100px;
        -webkit-text-stroke-width: 2px;
    }

    @media (min-width: ${size.desktopL}) {
        font-size: 70px;
        padding: 15px 100px;
        -webkit-text-stroke-width: 4px;
        border: 4px solid black;
    }
`

const ContainerTypeButtons = styled.div`
    padding: 30px;
`

const TypeButtons = styled.button`
    margin: 10px 10px;
    border-radius: 10px;
    font-weight: 800;
    font-size: 15px;
    text-transform: uppercase;
    border: 2px solid black;
    cursor: pointer; 
    background-color: ${(props) => ButtonColors(props.name)};
    &:hover {
        filter: brightness(80%);
    }

    @media (min-width: ${size.mobileS}) {
        padding: 10px 10px;
    }

    @media (min-width: ${size.laptop}) {
        padding: 10px 30px;
    }

    @media (min-width: ${size.desktopL}) {
        font-size: 30px;
        padding: 15px 50px;
    }
`

const TittlePokemonFiltered = styled.h3`
    font-size: 30px;  
    padding: 10px;
    margin: 10px;
    color: ${(props) => ButtonColors(props.type)};
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    background-color: ${colors.secondaryBlue};
    border-radius: 10px;
    border: 2px solid black;
    display: inline-block;

    @media (min-width: ${size.desktopL}) {
        font-size: 50px;
        padding: 15px 100px;
        -webkit-text-stroke-width: 2px;
    }
`

const ContainerFilteredPokemon = styled.ol`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;   
    overflow-y: auto;  
`

const ContainerList = styled.div`
    background-color: ${colors.terciaryBlue};
    border: 2px solid black;
    width: 100%;
    max-width: 90%;
    margin: 0px auto 50px auto;     
    border-radius: 10px;
`

const ContainerButton = styled.div`
    padding: 50px 0 20px 0;
`