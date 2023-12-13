import { Link, useParams } from "react-router-dom";
import { pokemonDetails } from "../../services/pokeApi";
import { useEffect, useState } from "react";
import { ModalDetails } from "./ModalDetails";
import styled from "styled-components";
import { ButtonColors } from "../buttons/FilterTypeButton/buttonColors.js";

async function getPokemonDetails(id, pokemonId) {
    const response = await pokemonDetails(id, pokemonId);
    return response;
}

export const PokemonDetails = () => {
    const [pokemonInfo, setPokemonInfo] = useState({});

    const { id } = useParams();

    useEffect(() => {
        async function fetchPokemonDetails() {
            const pokeInfo = await getPokemonDetails(id);
            setPokemonInfo(pokeInfo);
        }

        fetchPokemonDetails();
    }, [id]);

    return (
        <>
            <ContainerBackButton>
                <Link to={"/"}>
                    <BackButtonText>Back</BackButtonText>
                </Link>
            </ContainerBackButton>

            <ol>
                {pokemonInfo.types && Array.isArray(pokemonInfo.types) && (
                    pokemonInfo.types.map((types) => (
                        <PokemonType
                            key={types.type.name}
                            name={types.type.name}
                        >
                            {types.type.name}
                        </PokemonType>
                    ))
                )}
            </ol>

            <PokemonImage
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`}
                alt={pokemonInfo.name}
            ></PokemonImage>


            {/* <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokemonInfo.id}.png`}
        alt={pokemonInfo.name}
      ></img> */}

            <StatsContainer>
                {pokemonInfo.stats && Array.isArray(pokemonInfo.stats) && (
                    pokemonInfo.stats.map((stat) => (
                        <StatItem key={stat.stat.name}>
                            <Stats>{stat.stat.name}: {stat.base_stat}</Stats>
                            <ProgressBar width={(stat.base_stat / 100) * 100} />
                        </StatItem>
                    ))
                    )}
            </StatsContainer>

            <ButtonsAndPokemonNameContainers>
                <ModalDetails title="abilities" abilities={pokemonInfo.abilities} />
                <PokemonName>{pokemonInfo.name}</PokemonName>
                <ModalDetails title="moves" moves={pokemonInfo.moves} />
            </ButtonsAndPokemonNameContainers>
        </>
    );
};

const ContainerBackButton = styled.div`
    position: absolute;
    font-size: 50px;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
    background-color: #FB7B7B;
    padding: 30px 40px 30px 300px;
    border: none;
    border-radius: 0 100px 900px 0;
    top: 30px;
`
    
const BackButtonText = styled.p `
    position: relative;
    left: -100%;
    color: black;
`

const PokemonType = styled.li`
  display: inline-block;
  padding: 10px 20px;
  margin: 30px 10px 0 10px;
  border-radius: 10px;
  border: none;
  font-weight: 800;
  font-size: 25px;
  text-transform: uppercase;
  border: 2px solid black;
  background-color: ${(props) => ButtonColors(props.name)};
`;

const PokemonImage = styled.img`
  width: 35%;
`

const StatsContainer = styled.ol`
  list-style: none;
  padding: 0;
  position: absolute;
  top: 25%;
  width: 90%;
`;

const StatItem = styled.li`
  margin: 30px 0;
  width: 30%;
`;

const Stats = styled.span`
  display: inline-block;
  width: 150px; 
  position: absolute;
  left: 0; 
  text-align: left; 
  font-size: 30px;
  width: 100%;
`;

const ProgressBar = styled.div`
  width: ${(props) => props.width}%;
  background-color: #4caf50;
  padding: 20px;
  transition: width 0.3s ease-in-out;
`;

const ButtonsAndPokemonNameContainers = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
`

const PokemonName = styled.h2 `
    font-size: 50px;
    text-transform: capitalize;
`