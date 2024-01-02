import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, size } from "../../data/variables";

export const PokemonListItemFiltered = ({ url, name }) => {
  const [pokemonId, setPokemonId] = useState(null);

  useEffect(() => {
    const extractId = () => {
      if (url) {
        const id = url.split("/").filter(part => !!part).pop();
        setPokemonId(id);
      }
    };

    extractId();
  }, [url]);

  return (
    <ContainerFilteredPokemon data-testid="pokemon-list-item-filtered">
      <Link to={`/details/${pokemonId}`}>
        <PokemonCard>
          {pokemonId && (
            <>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                alt={name}
              />
              <PokeName>{name}</PokeName>
            </>
          )}
        </PokemonCard>
      </Link>
    </ContainerFilteredPokemon>
  );
};

export const PokemonListItem = ({ id, name }) => (
  <ContainerPokemonCard data-testid="pokemon-list-item">
    <Link to={`/details/${id}`}>
      <PokemonCard>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <PokeName>{name}</PokeName>
      </PokemonCard>
    </Link>
  </ContainerPokemonCard>
);

const ContainerFilteredPokemon = styled.div `
  margin: 30px 15px 0px 10px;
`

const ContainerPokemonCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 15px 0px 10px;
`

const PokemonCard = styled.li`
  background: #D0EAE9;
  background: -moz-linear-gradient(top, #D0EAE9 0%, #B2B6EE 100%);
  background: -webkit-linear-gradient(top, #D0EAE9 0%, #B2B6EE 100%);
  background: linear-gradient(to bottom, #D0EAE9 0%, #B2B6EE 100%);
  border-radius: 10px;
  border: 2px solid black;
  width: fit-content;
  list-style-type: none;
  &:hover {
    filter: brightness(110%);
  }

  @media (min-width: ${size.mobileS}) {
    width: 100%;
  }
`

const Image = styled.img`
  width: 18.75em;
  image-rendering: pixelated; 

  @media (min-width: ${size.mobileS}) {
    width: 13em;
  }

  @media (min-width: ${size.laptopL}) {
    width: 18.75em;
  }

  @media (min-width: ${size.desktopL}) {
    width: 25em;
  }
`

const PokeName = styled.p`
  font-size: 30px;
  color: black;
  padding-bottom: 20px;
  text-transform: capitalize;
`