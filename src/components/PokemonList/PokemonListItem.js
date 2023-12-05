import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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
    <Link to={`/details/${pokemonId}`}>
      <li>
        {pokemonId && (
          <>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
              alt={name}
            />
            <p>{name}</p>
          </>
        )}
      </li>
    </Link>
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

const ContainerSearchedPokemon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

const SearchedPokemon = styled.li`
  background-color: #2F4857;
  border-radius: 10px;
  width: fit-content;
`

const Image = styled.img`
  width: 300px;
  image-rendering: pixelated; 
`

const PokeName = styled.p`
  font-size: 30px;
  color: white;
  padding-bottom: 20px;
`