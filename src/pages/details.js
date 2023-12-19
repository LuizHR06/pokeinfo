import styled from "styled-components"
import { PokemonDetails } from "../components/PokemonDetails"
import img from '../assets/images/Desktop---14.gif'

export const Details = () => {
    return (
        <>
            <Background />
            <MainSection>
                <PokemonDetails />
            </MainSection>
        </>
    )
}

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const MainSection = styled.section `
    position: relative; 
    z-index: 1; 
    height: 100vh;
`