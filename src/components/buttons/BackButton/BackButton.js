import { Link } from "react-router-dom"
import styled, { css } from "styled-components"
import { colors, size } from "../../../data/variables"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"

export const BackButton = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <Link to={'/'}>
                <ContainerBackButton data-testid="BackButton" theme={theme.detailsPage} >
                    <BackButtonText theme={theme.detailsPage}>Back</BackButtonText>
                </ContainerBackButton>
            </Link>
        </>
    )
}

const ContainerBackButton = styled.div`
    position: absolute;
    font-size: 50px;
    font-weight: bold;
    top: 30px;
    text-transform: capitalize;
    cursor: pointer;
    ${(props) => css`
        background: ${props.theme.background};
    `}
    padding: 30px 40px 30px 300px;
    border: none;
    border-radius: 0 100px 900px 0;
    transition: all 250ms;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background-color: ${colors.secondaryPink};
        transition: all 250ms;
    }

    &:hover::before {
        width: 100%;
    }

    &:hover p {
        color: #e8e8e8;
    }

    @media (min-width: ${size.mobileS}) {
        padding: 15px 0px 15px 60px;
        font-size: 20px;
        border-radius: 0 900px 900px 0;
    }

    @media (min-width: ${size.tablet}) {
        padding: 30px 10px 30px 100px;
        font-size: 40px;
        border-radius: 0 100px 900px 0;
    }

    @media (min-width: ${size.laptop}) {
        padding: 30px 40px 30px 150px;
    }

    @media (min-width: ${size.laptopL}) {
        padding: 30px 40px 30px 300px;
        font-size: 50px;
        border-radius: 0 100px 900px 0;
    }

    @media (min-width: ${size.desktopL}) {
        font-size: 80px;
    }
`

const BackButtonText = styled.p`
    position: relative;
    left: -80%;
    color: black;

    ${(props) => css`
        color: ${props.theme.color};
    `}
`