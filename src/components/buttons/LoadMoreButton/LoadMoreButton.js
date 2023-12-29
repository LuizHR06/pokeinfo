import styled from "styled-components";
import { colors, size } from "../../../data/variables";

export const LoadMoreButton = ({ onClick }) => (
    <Button data-testid="load-more-button" onClick={onClick}>Load more</Button>
);

const Button = styled.button `
    color: white;
    border-radius: 10px;
    font-size: 25px;
    cursor: pointer; 
    background-color: ${colors.fourthBlue};
    transition: all 0.3s ease 0s;
    border: 2px solid white;
    text-align: center;
    &:hover {
        filter: saturate(500%);
    }

    @media (min-width: ${size.mobileS}) {
        width: 50%;
        padding: 15px;
    }

    @media (min-width: ${size.laptop}) {
        width: 25%;
    }

    @media (min-width: ${size.desktopL}) {
        width: 25%;
        padding: 25px;
        font-size: 40px;
    }
`