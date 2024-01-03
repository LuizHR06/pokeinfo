import { useContext, useState } from "react";
import { usePokemonList } from "./usePokemonList";
import { PokemonListItem } from "./PokemonListItem";
import { LoadMoreButton } from "../../buttons/LoadMoreButton/LoadMoreButton";
import styled, { css } from "styled-components";
import { ThemeContext } from "../../../contexts/theme-context";

export const PokemonList = () => {
    const { theme } = useContext(ThemeContext)

    const [offset, setOffset] = useState(0);
    const limit = 10;

    const pokemons = usePokemonList(limit, offset);

    const loadMore = () => {
        setOffset((prevOffset) => prevOffset + limit);
    };

    return (
        <>
            <ContainerList data-testid="PokemonList" theme={theme}>
                <ListPokemon>
                    {pokemons.map((poke, index) => (
                        <PokemonListItem key={index} id={poke.id} name={poke.name} />
                    ))}
                </ListPokemon>
                <ContainerButton>
                    <LoadMoreButton onClick={loadMore} />
                </ContainerButton>
            </ContainerList>
        </>
    );
};

const ContainerList = styled.div`
    ${(props) => css`
        background: ${props.theme.PokemonListsBackground};
    `}
    border: 2px solid black;
    width: 100%;
    max-width: 90%;
    margin: 50px auto;     
    border-radius: 10px;
`

const ListPokemon = styled.ol`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;   
    overflow-y: auto;  
`

const ContainerButton = styled.div `
    padding: 50px 0 20px 0;
`