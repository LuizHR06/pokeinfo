import styled, { css } from "styled-components"
import { colors, size } from "../../../data/variables"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"

export const Footer = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <FooterContainer data-testid="footer" theme={theme} >
                <FooterText>Created by Luiz Henrique</FooterText>
                <FooterTextCopyrightInfo>© PokeInfo 2023. All Pokémon-related content, names, and images are the property of Nintendo. This website is not endorsed by or affiliated with Nintendo. Pokémon is a trademark of Nintendo. </FooterTextCopyrightInfo>
            </FooterContainer>
        </>
    )
}

const FooterContainer = styled.footer `
    ${(props) => css`
        background: ${props.theme.HeaderFooterBackground};
    `}
    padding: 20px;
    margin-top: 50px;
`

const FooterText = styled.p `
    font-family: 'Pokemon';
    letter-spacing: 5px;
    color: ${colors.primaryYellow};
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${colors.primaryBlue};

    @media (min-width: ${size.mobileS}) {
        font-size: 35px;
    }

    @media (min-width: ${size.desktopL}) {
        font-size: 60px;
        -webkit-text-stroke-width: 3px;
    }
`

const FooterTextCopyrightInfo = styled.p `
    font-size: 20px;
    color: white;
    padding: 20px

    @media (min-width: ${size.mobileS}) {
        font-size: 20px;
    }

    @media (min-width: ${size.desktopL}) {
        font-size: 30px;
    }
`