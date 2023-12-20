import styled, { css } from "styled-components"
import { colors, size } from "../../../data/variables"

export const OpenModalButton = ({ title, onClick, children }) => {

    return (
        <>
            <OpenModalButtons title={title} onClick={onClick}>
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
    background-color: ${colors.primaryPink};
    border: none;
    border-radius: 0;

    &:hover {
        color: #e8e8e8;
    }

    &::before {
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 0;
        background-color: ${colors.fourthPink};
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