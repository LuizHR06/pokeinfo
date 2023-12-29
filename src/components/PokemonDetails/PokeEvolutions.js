import styled from "styled-components"
import { colors, size } from "../../data/variables"
import { Link } from "react-router-dom"
import { pokemonSpecies } from "../../services/pokeApi"
import { useEffect, useState } from "react"

export const PokeEvolutions = ( {pokemonID} ) => {
    const [speciesId, setSpeciesId] = useState(null);
    const [speciesFirstEvolutionId, setSpeciesFirstEvolutionId] = useState(null);
    const [speciesLastEvolutionId, setSpeciesLastEvolutionId] = useState(null);
    
    async function getPokemonSpecies(pokeName) {
        const response = await pokemonSpecies(pokeName)
        return response
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const pokeSpecies = await getPokemonSpecies(pokemonID.name);
                
                const evolutionChainResponse = await fetch(
                    pokeSpecies.evolution_chain.url
                );
                
                const evolutionChainData = await evolutionChainResponse.json();
                

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
    }, [pokemonID.name]);

    return (
        <>
            <EvolutionsContainer data-testid="pokemon-evolutions">
                <EvolutionsContainerText>Evolutions</EvolutionsContainerText>
                {speciesId && (
                    <Link to={`/details/${speciesId}`}>
                        <EvolutionImages
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${speciesId}.png`}
                            alt={`Pokemon ${speciesId}`}
                        />
                    </Link>
                )}

                {speciesFirstEvolutionId && (
                    <Link to={`/details/${speciesFirstEvolutionId}`}>
                        <EvolutionImages
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${speciesFirstEvolutionId}.png`}
                            alt={`Pokemon ${speciesFirstEvolutionId}`}
                        />
                    </Link>
                )}

                {speciesLastEvolutionId && (
                    <Link to={`/details/${speciesLastEvolutionId}`}>
                        <EvolutionImages
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${speciesLastEvolutionId}.png`}
                            alt={`Pokemon ${speciesLastEvolutionId}`}
                        />
                    </Link>
                )}
            </EvolutionsContainer>
        </>
    )
}

const EvolutionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: fit-content;
    margin-top: 30px;
    background-color: ${colors.primaryPink};
    position: absolute;
    border-radius: 10px 0 0 10px;
    right: 0;
    top: 0;

    @media (min-width: ${size.mobileS}) {
        position: static;
        width: 90%;
        margin: auto;
        border-radius: 10px;
    }

    @media (min-width: ${size.tablet}) {
        width: 70%;
    }

    @media (min-width: ${size.laptopL}) {
        position: absolute;
        width: 25%;
        margin-top: 30px;
        border-radius: 10px 0 0 10px;
    }
`

const EvolutionsContainerText = styled.p`
    font-size: 30px;
    margin-top: 10px;
    font-weight: bold;
`

const EvolutionImages = styled.img`
    width: 43%;
    margin: 10px 0;
`