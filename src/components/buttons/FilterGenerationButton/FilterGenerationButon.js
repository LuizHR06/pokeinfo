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
            {generations.results.map((gen, index) => (
                <button key={index} onClick={() => onButtonClick(gen.name)}>{gen.name}</button>
            ))}
        </>
    )
};