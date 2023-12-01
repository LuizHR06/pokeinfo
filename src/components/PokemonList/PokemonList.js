import { useState } from "react";
import { usePokemonList } from "./usePokemonList";
import { PokemonListItem } from "./PokemonListItem";
import { LoadMoreButton } from "../buttons/LoadMoreButton/LoadMoreButton";
import styled from "styled-components";

export const PokemonList = () => {
    const [offset, setOffset] = useState(0);
    const limit = 10;

    const pokemons = usePokemonList(limit, offset);

    const loadMore = () => {
        setOffset((prevOffset) => prevOffset + limit);
    };

    return (
        <>
            <ContainerLista>
                <ListaPokemon>
                    {pokemons.map((poke, index) => (
                        <PokemonListItem key={index} id={poke.id} name={poke.name} />
                    ))}
                </ListaPokemon>
                <LoadMoreButton onClick={loadMore} />
            </ContainerLista>
        </>
    );
};

const ListaPokemon = styled.ol`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;  
    margin: 0;   
    overflow-y: auto;  
`

const ContainerLista = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: red;
    width: 100%;
    max-width: 1000px;
    margin: auto;     
    overflow-x: hidden; 
`
