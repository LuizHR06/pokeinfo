import { PokemonSearch } from "../PokemonSearch/PokemonSearch"
import { PokemonList } from "../PokemonList/PokemonList"
import { FilterTypeButton } from "../buttons/FilterTypeButton/FilterTypeButton"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
import { BackToTopButton } from "../buttons/BackToTopButton/BackToTopButton"

export const Main = () => {
    return (
        <>  
            <Header />          
            <FilterTypeButton />
            <PokemonSearch />
            <PokemonList />
            <BackToTopButton />
            <Footer />   
        </>
    )
}