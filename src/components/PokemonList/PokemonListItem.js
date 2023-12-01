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
  <Link to={`/details/${id}`}>
    <li>
      <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
      <p>{name}</p>
    </li>
  </Link>
);

const Image = styled.img`
  width: 400px;
  image-rendering: pixelated; /* Maintain pixelated appearance during scaling */
`;