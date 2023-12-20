import { useEffect, useState } from "react";
import { pokemonGenerations } from "../../../services/pokeApi";
import styled from "styled-components";
import { colors, size } from "../../../data/variables";

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
                    <option key={index} value={gen.name}>{gen.name}</option>
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
    background-color: ${colors.fourthBlue};
    color: #fff;
    cursor: pointer;

    @media (min-width: ${size.mobileS}) {
        width: 70%;
        font-size: 15px;
      }

      @media (min-width: ${size.laptopL}) {
        font-size: 25px;
        width: 30%;
      }

      @media (min-width: ${size.laptopL}) {
        font-size: 40px;
      }
`