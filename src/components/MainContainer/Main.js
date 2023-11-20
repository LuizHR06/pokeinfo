// import { PokemonList } from "../PokemonList/PokemonList"
import { PokemonSearch } from "../PokemonSearch/PokemonSearch"
import { FilterTypeButton } from "../buttons/FilterTypeButton/FilterTypeButton"


export const Main = () => {
    return (
        <>
            <FilterTypeButton />
            <PokemonSearch />
            {/* <PokemonList /> */}
        </>
    )
}