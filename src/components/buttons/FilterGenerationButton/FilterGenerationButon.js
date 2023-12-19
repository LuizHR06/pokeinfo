import { useEffect, useState } from "react";
import { pokemonGenerations } from "../../../services/pokeApi";
import styled from "styled-components";

export const FilterGenerationButton = ({ onButtonClick }) => {
    const [generations, setGenerations] = useState({ results: [] })

    useEffect(() => {
        const fetchData = async () => {
            const res = await pokemonGenerations()
            setGenerations(res)
        }
    
        fetchData()
    }, [])

    return (
        <>
            <SelectGenerationInput onChange={(event) => onButtonClick(event.target.value)}>
                {generations.results.map((gen, index) => (
                    <InputOptions key={index} value={gen.name}>{gen.name}</InputOptions>
                ))}
            </SelectGenerationInput>
        </>
    )
};

const SelectGenerationInput = styled.select `
    font-size: 20px;
    font-weight: bold;
    appearance: none;
    border-radius: 10px;
    width: 500px;
    padding: 20px;
    margin: 20px 0;
    text-align: center;
    background-color: #2F4857;
    color: #fff;
    cursor: pointer;
`

const InputOptions = styled.option `
    padding: 100px;
`