// PokemonListItem.js
import React, { useEffect, useState } from "react";

export const PokemonListItema = ({ url, name }) => {
  const [pokemonId, setPokemonId] = useState(null);

  useEffect(() => {
    const extractId = () => {
      // Check if the URL is defined before splitting
      if (url) {
        const id = url.split("/").filter(part => !!part).pop();
        setPokemonId(id);
      }
    };

    extractId();
  }, [url]);

  return (
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
  );
};


export const PokemonListItem = ({ id, name }) => (
    <li>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        <p>{name}</p>
    </li>
);