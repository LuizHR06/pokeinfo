import styled from "styled-components";

export const LoadMoreButton = ({ onClick }) => (
    <Button onClick={onClick}>Carregar mais</Button>
);

const Button = styled.button `
    color: white;
    padding: 15px 85px;
    border-radius: 10px;
    border: none;
    font-size: 25px;
    cursor: pointer; 
    background-color: #2F4857;
    transition: all 0.3s ease 0s;
    border: 2px solid white;
    &:hover {
        filter: saturate(500%);
    }
`