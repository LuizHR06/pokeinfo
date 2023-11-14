import { useEffect, useState } from "react"

export const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=10`)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error('failed to fetch data')
                }
            })
            .then((data) => {
                setPokemons(data.results)
            })
            .catch((error) => {
                console.error('Error fetching data', error)
            })

    }, [])

    const List = () => {
        return pokemons.map(poke => (
            <li key={poke.name}>{poke.name}</li>
        ))
    }

    return (
        <>
            <h1>apvaoaov</h1>
            <ul>
                <List />
            </ul>
        </>
    )
}