import { useParams } from "react-router-dom";
import { pokemonDetails, pokemonSpecies } from "../../services/pokeApi";
import { useEffect, useState } from "react";
import { ModalDetails } from "./ModalDetails";
import styled from "styled-components";
import { BackButton } from "../buttons/BackButton/BackButton.js";
import { size } from "../../data/variables.js";
import { PokeEvolutions } from "./PokeEvolutions.js";
import { PokeStats } from "./PokeStats.js";
import { PokeType } from "./PokeType.js";

async function getPokemonDetails(id, pokemonId) {
    const response = await pokemonDetails(id, pokemonId);
    return response;
}

async function getPokemonSpecies(pokeName) {
    const response = await pokemonSpecies(pokeName)
    return response
}

export const PokemonDetails = () => {
    const [pokemonInfo, setPokemonInfo] = useState({});
    const [pokemonSpeciesInfo, setPokemonSpeciesInfo] = useState({});
    const [pokeEvolutionChain, setPokeEvolutionChain] = useState([]);
    const [speciesId, setSpeciesId] = useState(null);
    const [speciesFirstEvolutionId, setSpeciesFirstEvolutionId] = useState(null);
    const [speciesLastEvolutionId, setSpeciesLastEvolutionId] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const pokeInfo = await getPokemonDetails(id);
                setPokemonInfo(pokeInfo);

                const pokeSpecies = await getPokemonSpecies(pokeInfo.name);
                setPokemonSpeciesInfo(pokeSpecies);

                const evolutionChainResponse = await fetch(
                    pokeSpecies.evolution_chain.url
                );
                const evolutionChainData = await evolutionChainResponse.json();
                setPokeEvolutionChain(evolutionChainData.chain);

                const getSpeciesId = (speciesUrl) => {
                    return speciesUrl ? speciesUrl.split("/").slice(-2, -1)[0] : null;
                };

                const currentPokeEvolutionChain = evolutionChainData.chain;

                setSpeciesId(getSpeciesId(currentPokeEvolutionChain?.species?.url));
                setSpeciesFirstEvolutionId(
                    getSpeciesId(currentPokeEvolutionChain?.evolves_to[0]?.species?.url)
                );
                setSpeciesLastEvolutionId(
                    getSpeciesId(
                        currentPokeEvolutionChain?.evolves_to[0]?.evolves_to[0]?.species?.url
                    )
                );
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [id]);

    if (!pokemonInfo || !pokemonSpeciesInfo || !pokeEvolutionChain) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <BackButton />

            <PokeType type={pokemonInfo.types} />

            <PokemonImage
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
                alt={pokemonInfo.name}
            />

            <PokemonName>{pokemonInfo.name}</PokemonName>

            <PokeStats stats={pokemonInfo.stats} />

            <PokeEvolutions 
                speciesId={speciesId} 
                speciesFirstEvolutionId={speciesFirstEvolutionId} 
                speciesLastEvolutionId={speciesLastEvolutionId} 
            />

            {/* <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemonInfo.id}.png`}
                alt={pokemonInfo.name}
                ></img> 
            */}

            <ModalButtonsContainer>
                <ModalDetails title="abilities" abilities={pokemonInfo.abilities} />
                <ModalDetails title="moves" moves={pokemonInfo.moves} />
            </ModalButtonsContainer>
        </>
    );
};

const PokemonImage = styled.img`
    width: 35%;
    margin: auto;

    @media (min-width: ${size.mobileS}) {
        width: 100%;
        margin-top: 85px;
    }

    @media (min-width: ${size.mobileM}) {
        width: 80%;
    }

    @media (min-width: ${size.mobileL}) {
        margin-top: 50px;
    }

    @media (min-width: ${size.tablet}) {
        width: 65%;
    }

    @media (min-width: ${size.laptop}) {
        width: 60%;
        margin-top: 30px;
    }

    @media (min-width: ${size.laptopL}) {
        width: 35%;
        margin-top: 0;
    }
`;

const ModalButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    @media (min-width: ${size.mobileS}) {
        flex-wrap: wrap;
        flex-direction: column;
    }

    @media (min-width: ${size.laptopL}) {
        flex-wrap: no-wrap;
        flex-direction: row;
    }
`;

const PokemonName = styled.h2`
    font-size: 50px;
    text-transform: capitalize;
    background-color: #d0eae9;
    padding: 10px;
    display: inline-block;
    border: 2px solid #000;
    border-radius: 10px;
    margin-top: 30px;

    @media (min-width: ${size.mobileS}) {
        font-size: 30px;
    }

    @media (min-width: ${size.tablet}) {
        margin: 10px auto;
    }

    @media (min-width: ${size.laptop}) {
        font-size: 40px;
    }

    @media (min-width: ${size.desktopL}) {
        font-size: 80px
    }
`;