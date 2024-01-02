import { useContext } from "react"
import { ThemeContext, themes } from "../../../contexts/theme-context"
import styled, { css } from "styled-components"
import { size } from "../../../data/variables";

export const ThemeTogglerButton = ({ page }) => {

    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <>
            <ThemeButton
                data-testid="ThemeButton"
                page={page}
                theme={theme.togglerButton}
                onClick={() =>
                    setTheme(theme === themes.light ? themes.dark : themes.light)
                }
            >
                {theme === themes.light ? "Dark" : "Light"}
            </ThemeButton>
        </>
    )
}

const ThemeButton = styled.button`
    border-radius: 50px;
    cursor: pointer;
    transition: ease 0.5s;
    width: fit-content;
    border: none;

    ${(props) =>
        props.page === 'details'
        ? css`
                position: fixed;
                z-index: 5;
                left: 60px;
                top: 18%;

                @media (min-width: ${size.mobileS}) {
                    position: absolute;
                    left: 65%;
                    top: 29px;
                    padding: 15px 20px;
                    font-size: 20px;
                }
            
                @media (min-width: ${size.tablet}) {
                    left: 80%;
                    top: 40px;
                }
            
                @media (min-width: ${size.laptopL}) {
                    position: fixed;
                    left: 60px;
                    top: 18%;
                    padding: 20px;
                    font-size: 25px;
                }
            `
        : css `
            position: fixed;
            z-index: 5;
            left: 60px;
            top: 18%;

            @media (min-width: ${size.mobileS}) {
                position: absolute;
                left: 65%;
                top: 12em;
                padding: 12px 20px;
                font-size: 18px;
            }

            @media (min-width: ${size.mobileM}) {
                top: 15em;
            }
        
            @media (min-width: ${size.tablet}) {
                left: 80%;
                top: 8em;
            }

            @media (min-width: ${size.laptop}) {
                top: 10em;
            }
        
            @media (min-width: ${size.laptopL}) {
                position: fixed;
                left: 60px;
                top: 18%;
                padding: 20px;
                font-size: 25px;
            }
            `
    }

    ${(props) => css`
        color: ${props.theme.color};
        background: ${props.theme.background};
    `}    
`