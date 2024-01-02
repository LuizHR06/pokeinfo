import styled, { css } from "styled-components"
import { PokemonDetails } from "../components/PokemonDetails"
import img from '../assets/images/DetailsPage-Background-desktop.gif'
import imgMobile from '../assets/images/DetailsPage-Background-mobile.gif'
import { size } from "../data/variables"
import { useContext } from "react"
import { ThemeContext, themes } from "../contexts/theme-context"

export const Details = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Background />
            <MainSection theme={theme} >
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

const MainSection = styled.section`
    position: relative; 
    z-index: 1; 
    height: 100vh;
    width: 100%;

    ${(props) =>
        props.theme === themes.dark
        && css`
            background-color: rgba(0, 0, 0, 0.3);
        `
    }

    @media (min-width: ${size.tablet}) {
        display: flex;
        flex-direction: column;
        height: 100%;
    }  
    
    @media (min-width: ${size.laptopL}) {
        height: 100vh;
    }
`