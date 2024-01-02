import styled, { css } from "styled-components"
import { colors, size } from "../../data/variables";
import { ThemeContext } from "../../contexts/theme-context.js";
import { useContext } from "react";

export const Header = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <HeaderContainer theme={theme.header_Footer}>
                <HeaderTitle >Welcome to PokeInfo</HeaderTitle>
            </HeaderContainer>
        </>
    );
};

const HeaderContainer = styled.header `
    margin-bottom: 30px;
    ${(props) => css`
        background: ${props.theme.background};
    `}
`;

const HeaderTitle = styled.h2`
    font-family: 'Pokemon';
    font-weight: bold;
    font-style: normal;
    padding-bottom: 10px;
    letter-spacing: 5px;
    color: ${colors.primaryYellow};
    -webkit-text-stroke-color: ${colors.primaryBlue};

    @media (min-width: ${size.mobileS}) {
        font-size: 40px;
        -webkit-text-stroke-width: 2px;
    }

    @media (min-width: ${size.mobileM}) {
        font-size: 50px;
    }

    @media (min-width: ${size.laptop}) {
        font-size: 70px;
        -webkit-text-stroke-width: 4px;
    }

    @media (min-width: ${size.desktopL}) {
        font-size: 100px;
        -webkit-text-stroke-width: 6px;
    }
`;