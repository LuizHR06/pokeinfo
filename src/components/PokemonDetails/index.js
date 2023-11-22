import { Link, useParams } from "react-router-dom"
import { pokemonDetails } from "../../services/pokeApi"
import { useEffect, useState } from "react"

async function getPokemonDetails(id, pokemonId) {
    const response = await pokemonDetails(id, pokemonId)
    return response
}

export const PokemonDetails = () => {
    const [pokemonInfo, setPokemonInfo] = useState({})

    const { id } = useParams()

    useEffect(() => {
        async function fetchPokemonDetails() {
            const pokeInfo = await getPokemonDetails(id)
            // console.log(pokeInfo, 'aobainfoirmação')
            setPokemonInfo(pokeInfo)
        }

        fetchPokemonDetails()
    }, [id])
    console.log(pokemonInfo)

    return (
        <>
            <Link to={'/'}>
                <p>aoooboaoboaoaoboboaboaoa</p>
            </Link>
            <h1>{pokemonInfo.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonInfo.id}.png`} alt={pokemonInfo.name}></img>
        </>
    )
}