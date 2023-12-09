import styled from "styled-components"

export const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterText>Created by Luiz Henrique</FooterText>
                <FooterTextCopyrightInfo>© PokeInfo 2023. All Pokémon-related content, names, and images are the property of Nintendo. This website is not endorsed by or affiliated with Nintendo. Pokémon is a trademark of Nintendo. </FooterTextCopyrightInfo>
            </FooterContainer>
        </>
    )
}

const FooterContainer = styled.footer `
    background-color: #ff0000;
    padding: 20px;
    margin-top: 50px;
`

const FooterText = styled.p `
    font-family: 'Pokemon';
    font-size: 35px;
    letter-spacing: 5px;
    color: #ffcb05;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #3466af;
`

const FooterTextCopyrightInfo = styled.p `
    font-size: 20px;
    color: white;
    padding: 20px
`