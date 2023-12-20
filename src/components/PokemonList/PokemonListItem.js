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
    <ContainerFilteredPokemon>
      <Link to={`/details/${pokemonId}`}>
        <SearchedPokemon>
          {pokemonId && (
            <>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                alt={name}
              />
              <PokeName>{name}</PokeName>
            </>
          )}
        </SearchedPokemon>
      </Link>
    </ContainerFilteredPokemon>
  );
};

export const PokemonListItem = ({ id, name }) => (
  <ContainerSearchedPokemon>
    <Link to={`/details/${id}`}>
      <SearchedPokemon>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <PokeName>{name}</PokeName>
      </SearchedPokemon>
    </Link>
  </ContainerSearchedPokemon>
);

const ContainerFilteredPokemon = styled.div `
  margin: 30px 15px 0px 10px;
`

const ContainerSearchedPokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 15px 0px 10px;
`

const SearchedPokemon = styled.li`
  background-color: ${colors.secondaryBlue};
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