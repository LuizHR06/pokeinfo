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
                <ContainerButton>
                    <LoadMoreButton onClick={loadMore} />
                </ContainerButton>
            </ContainerLista>
        </>
    );
};

const ContainerLista = styled.div`
    background-color: #6399B8;
    width: 100%;
    max-width: 90%;
    margin: 50px auto;     
    border-radius: 10px;
`

const ListaPokemon = styled.ol`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;   
    overflow-y: auto;  
`

const ContainerButton = styled.div `
    padding: 50px 0 20px 0;
`