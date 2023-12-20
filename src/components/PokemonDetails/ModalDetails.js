import { useState } from "react"
import styled, { css } from "styled-components"
import { pokemonAbilities } from "../../services/pokeApi"
import { MovesTable } from "./MovesTable"
import { colors, size } from "../../data/variables"
import { OpenModalButton } from "../buttons/OpenModalButtons/OpenModalButtons"

export const ModalDetails = (props) => {
    const [modal, setModal] = useState(false)
    const [abilityDescriptions, setAbilityDescriptions] = useState([]);

    const toggleModal = () => {
        setModal(!modal)
    }

    const fetchData = async (name) => {
        try {
            const res = await pokemonAbilities(name)
            return res
        } catch (error) {
            console.error("Error fetching data", error);
        }
    }

    const abilitieDesc = async () => {
        const descriptions = await Promise.all(
            props.abilities.map((ability) => fetchData(ability.ability.name))
        );
        setAbilityDescriptions(descriptions);
    }

    return (
        <>

            <OpenModalButton
                title={props.title}
                onClick={(event) => {
                    toggleModal()
                    if(props.title === 'abilities') {
                        abilitieDesc()
                    }
                }}>
                <ButtonsNames title={props.title}>{props.title}</ButtonsNames>
            </OpenModalButton>

            {modal && (
                <Container>
                    <Overlay onClick={toggleModal} />
                    <Content>
                        <ModalTitle>{props.title}</ModalTitle>

                        {props.title === 'abilities' && (
                            (props.abilities.map((abilityId, index) => (
                                <ul>
                                    <li key={index}>
                                        <ModalAbilitiesName>{abilityId.ability.name}</ModalAbilitiesName>
                                        {abilityDescriptions[index] && (
                                            <ModalAbilitiesDesc>{abilityDescriptions[index].effect_entries
                                                .filter((en) => en.language.name === "en")
                                                .map((en) => en.short_effect)
                                                .join(", ")}</ModalAbilitiesDesc>
                                        )}
                                    </li>
                                </ul>
                            )))
                        )}

                        {props.title === 'moves' && (
                            <>
                                <MovesTable moves={props.moves} />
                            </>
                        )}

                        <CloseModal onClick={toggleModal}>Close</CloseModal>
                    </Content>
                </Container>
            )}
        </>
    )
}

const ButtonsNames = styled.span`
    position: relative;
    
    @media (min-width: ${size.mobileS}) {
        left: 0;
    }

    @media (min-width: ${size.laptopL}) {
        ${(props) => (props.title === 'abilities' && css`
            left: -90%;
        `)}
        ${(props) => (props.title === 'moves' && css`
            left: 90%;
        `)}
    }

    @media (min-width: ${size.desktopL}) {
        ${(props) => (props.title === 'abilities' && css`
            left: -50%;
        `)}
        ${(props) => (props.title === 'moves' && css`
            left: 50%;
        `)}
    }
`

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 2;
`

const Overlay = styled.div`
    background: rgba(49,49,49,0.8);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
`

const Content = styled.div`
    max-height: 95vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    position: absolute;
    background: #d0eae9;
    padding: 14px 30px;
    border-radius: 3px;
    max-width: 300px;
    min-width: 90%;
`

const ModalTitle = styled.h2`
    font-size: 50px;
    text-transform: capitalize;
    margin: 30px 0;
    height: 10vh;

    @media (min-width: ${size.mobileS}) {
        font-size: 40px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 60px;
    }
`

const ModalAbilitiesName = styled.h2`
    font-size: 30px;
    margin: 25px 0;
    
    @media (min-width: ${size.desktopL}) {
        font-size: 70px;
    }
`

const ModalAbilitiesDesc = styled.p`
    font-size: 20px;
    margin-bottom: 30px;

    @media (min-width: ${size.desktopL}) {
        font-size: 50px;
    }
`

const CloseModal = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
    background-color: ${colors.fourthBlue};
    border-radius: 10px;
    color: #fff;
    cursor: pointer;

    @media (min-width: ${size.laptopL}) {
        font-size: 30px;
    }

    @media (min-width: ${size.desktopL}) {
        font-size: 40px;
    }
`