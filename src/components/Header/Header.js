import styled from "styled-components"

export const Header = () => {
    return (
        <>
            <HeaderContainer>
                <HeaderTitle>Welcome to PokeInfo</HeaderTitle>
            </HeaderContainer>
        </>
    );
};

const HeaderContainer = styled.header `
    background-color: #ff0000;
    margin-bottom: 30px
`;

const HeaderTitle = styled.h2`
    font-family: 'Pokemon';
    font-weight: bold;
    font-style: normal;
    font-size: 70px;
    padding-bottom: 10px;
    letter-spacing: 5px;
    color: #ffcb05;
    -webkit-text-stroke-width: 4px;
    -webkit-text-stroke-color: #3466af;
`;