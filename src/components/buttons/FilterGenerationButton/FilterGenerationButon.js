import { useEffect, useState } from "react";
import { pokemonGenerations } from "../../../services/pokeApi";

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
            <select onChange={(event) => onButtonClick(event.target.value)}>
                {generations.results.map((gen, index) => (
                    <option key={index}>{gen.name}</option>
                ))}
            </select>
        </>
    )
};