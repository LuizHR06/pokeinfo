import React from 'react';
import { PokemonSearch } from "./PokemonSearch/PokemonSearch"
import { PokemonList } from './PokemonList/PokemonList';
import { FilterTypeButton } from "../buttons/FilterTypeButton/FilterTypeButton"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"
import { BackToTopButton } from "../buttons/BackToTopButton/BackToTopButton"
import { ThemeTogglerButton } from "../buttons/ThemeTogglerButton/ThemeTogglerButton"

export const Main = () => {
    return (
        <>
            <Header />
            <ThemeTogglerButton />
            <FilterTypeButton />
            <PokemonSearch />
            <PokemonList />
            <BackToTopButton />
            <Footer />
        </>
    )
}