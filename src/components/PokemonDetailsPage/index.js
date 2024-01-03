import { useParams } from "react-router-dom";
import { pokemonDetails } from "../../services/pokeApi";
import { useEffect, useState } from "react";
import { ModalDetails } from "./ModalDetails";
import styled from "styled-components";
import { BackButton } from "../buttons/BackButton/BackButton.js";
import { size } from "../../data/variables.js";
import { PokeEvolutions } from "./PokeEvolutions.js";
import { PokeStats } from "./PokeStats.js";
import { PokeType } from "./PokeType.js";
import { Loading } from "../Loading/Loading.js";
import { ThemeTogglerButton } from "../buttons/ThemeTogglerButton/ThemeTogglerButton.js";

async function getPokemonDetails(id, pokemonId) {
    const response = await pokemonDetails(id, pokemonId);
    return response;
}

export const PokemonDetails = () => {
    const [pokemonInfo, setPokemonInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            try {
                const pokeInfo = await getPokemonDetails(id);
                setPokemonInfo(pokeInfo);                

                setIsLoading(false); 
            } catch (error) {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        }

        fetchData();
    }, [id]);

    return (
        <div data-testid="pokemon-details">
            {isLoading ? (
                <Loading data-testid="pokemon-details-loading" loading={isLoading} />
            ) : (
                <PokemonDetailsContainer >
                    <BackButton data-testid="BackButton" />

                    <ThemeTogglerButton data-testid="ThemeButton" page={'details'}/>

                    <PokeType type={pokemonInfo.types} />

                    <PokemonImage
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
                        alt={pokemonInfo.name}
                        data-testid="pokemon-details-img"
                    />

                    <PokemonName data-testid="pokemon-name">{pokemonInfo.name}</PokemonName>

                    <PokeStats stats={pokemonInfo.stats} data-testid="pokemon-stats" />

                    <PokeEvolutions pokemonID={pokemonInfo} />

                    <ModalButtonsContainer data-testid="modal-buttons">
                        <ModalDetails title="abilities" abilities={pokemonInfo.abilities} />
                        <ModalDetails title="moves" moves={pokemonInfo.moves} />
                    </ModalButtonsContainer>
                </PokemonDetailsContainer>
            )}
        </div>
    );
};

const PokemonDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

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
    margin: 30px auto;

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