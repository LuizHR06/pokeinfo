import styled from "styled-components"
import { PokemonDetails } from "../components/PokemonDetails"
import img from '../assets/images/Desktop---14.gif'
import imgMobile from '../assets/images/Desktop---1555.gif'
import { size } from "../data/variables"

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
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    @media (min-width: ${size.mobileS}) {
        background-image: url(${imgMobile});
    }

    @media (min-width: ${size.laptop}) {
        background-image: url(${img});
    }
`

const MainSection = styled.section `
    position: relative; 
    z-index: 1; 
    height: 100vh;

    @media (min-width: ${size.tablet}) {
        display: flex;
        flex-direction: column;
        height: 100%;
    }  
    
    @media (min-width: ${size.laptopL}) {
        height: 100vh;
    }
`