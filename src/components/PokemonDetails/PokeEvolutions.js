import styled from "styled-components"
import { colors, size } from "../../data/variables"
import { Link } from "react-router-dom"

export const PokeEvolutions = ( { speciesId, speciesFirstEvolutionId, speciesLastEvolutionId} ) => {
    return (
        <>
            <EvolutionsContainer>
                <EvolutionsContainerText>Evolutions</EvolutionsContainerText>
                {speciesId && (
                    <Link to={`/details/${speciesId}`}>
                        <EvolutionImages
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${speciesId}.png`}
                            alt="aoba"
                        />
                    </Link>
                )}

                {speciesFirstEvolutionId && (
                    <Link to={`/details/${speciesFirstEvolutionId}`}>
                        <EvolutionImages
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${speciesFirstEvolutionId}.png`}
                            alt="aoba"
                        />
                    </Link>
                )}

                {speciesLastEvolutionId && (
                    <Link to={`/details/${speciesLastEvolutionId}`}>
                        <EvolutionImages
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${speciesLastEvolutionId}.png`}
                            alt="aoba"
                        />
                    </Link>
                )}
            </EvolutionsContainer>
        </>
    )
}

const EvolutionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: fit-content;
    margin-top: 30px;
    background-color: ${colors.primaryPink};
    position: absolute;
    border-radius: 10px 0 0 10px;
    right: 0;
    top: 0;

    @media (min-width: ${size.mobileS}) {
        position: static;
        width: 90%;
        margin: auto;
        border-radius: 10px;
    }

    @media (min-width: ${size.tablet}) {
        width: 70%;
    }

    @media (min-width: ${size.laptopL}) {
        position: absolute;
        width: 25%;
        margin-top: 30px;
        border-radius: 10px 0 0 10px;
    }
`

const EvolutionsContainerText = styled.p`
    font-size: 30px;
    margin-top: 10px;
    font-weight: bold;
`

const EvolutionImages = styled.img`
    width: 43%;
    margin: 10px 0;
`