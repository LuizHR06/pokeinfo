import styled from "styled-components";
import { size } from "../../data/variables";
import { ButtonColors } from "../buttons/FilterTypeButton/buttonColors";

export const PokeType = ( {type} ) => {
    return (
        <>
            <ol>
                {type && Array.isArray(type) && (
                    type.map((types) => (
                        <PokemonType
                            key={types.type.name}
                            name={types.type.name}
                        >
                            {types.type.name}
                        </PokemonType>
                    ))
                )}
            </ol>
        </>
    )
}

const PokemonType = styled.li`
    display: inline-block;
    padding: 10px 20px;
    margin: 30px 10px 0 10px;
    border-radius: 10px;
    border: none;
    font-weight: 800;
    font-size: 25px;
    text-transform: uppercase;
    border: 2px solid black;
    background-color: ${(props) => ButtonColors(props.name)};

    @media (min-width: ${size.mobileS}) {
        font-size: 15px;
        margin-top: 35%;
    }

    @media (min-width: ${size.tablet}) {
        margin-top: 50px;
        font-size: 20px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 25px;
    }

    @media (min-width: ${size.desktopL}) {
        font-size: 40px;
        margin: 50px 30px;
    }
`;