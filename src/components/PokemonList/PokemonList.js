import { useState } from "react";
import { usePokemonList } from "./usePokemonList";
import { PokemonListItem } from "./PokemonListItem";
import { LoadMoreButton } from "../buttons/LoadMoreButton/LoadMoreButton";

export const PokemonList = () => {
    const [offset, setOffset] = useState(0);
    const limit = 10;

    const pokemons = usePokemonList(limit, offset);

    const loadMore = () => {
        setOffset((prevOffset) => prevOffset + limit);
    };

    return (
        <>
            <ol>
                {pokemons.map((poke, index) => (
                    <PokemonListItem key={index} id={poke.id} name={poke.name} />
                ))}
            </ol>
            <LoadMoreButton onClick={loadMore} />
        </>
    );
};