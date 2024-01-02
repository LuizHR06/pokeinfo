import styled, { css } from "styled-components"
import { size } from "../../../data/variables"
import { useContext } from "react"
import { ThemeContext } from "../../../contexts/theme-context"

export const OpenModalButton = ({ title, onClick, children }) => {
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <OpenModalButtons theme={theme.detailsPage} data-testid="open-modal-button" title={title} onClick={onClick}>
                {children}
            </OpenModalButtons>
        </>
    )
}

const OpenModalButtons = styled.button`
    font-size: 50px;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: all 250ms;
    ${(props) => css`
        background: ${props.theme.background};
    `}
    border: none;
    border-radius: 0;

    &:hover {
        color: #f3f3f3;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 0;
        ${(props) => css`
            background-color: ${props.theme.backgroundHoverModalButtons};
        `}
        transition: all 250ms;
        pointer-events: none;
    }

    &:hover::before {
        width: 100%;
    }

    @media (min-width: ${size.mobileS}) {
        font-size: 40px;
        padding: 30px;
        margin: 40px auto;
        border-radius: 10px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 50px;

        position: absolute;
        top: 80%;

        ${(props) => (props.title === 'abilities' && css`
            padding: 20px 40px 20px 300px;
            border-radius: 0 900px 100px 0;
            &::before {
                left: 0;
            }
            left: 0;
        `)}

        ${(props) => (props.title === 'moves' && css`
            padding: 20px 300px 20px 40px;
            border-radius: 900px 0 0 100px;
            &::before {
                right: 0;
            }
            right: 0;
        `)}

        @media (min-width: ${size.desktopL}) {
            font-size: 90px;
        }
    }
`