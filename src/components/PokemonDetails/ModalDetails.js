import { useState } from "react"
import styled, { css } from "styled-components"
import { pokemonAbilities } from "../../services/pokeApi"
import { MovesTable } from "./MovesTable"

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
            <OpenModalButtons title={props.title} onClick={event => {
                toggleModal()
                if (props.title === 'abilities') {
                    abilitieDesc()
                }
            }}>
                <ButtonsNames title={props.title}>
                    {props.title}
                </ButtonsNames>
            </OpenModalButtons>
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
    ${(props) => (props.title === 'abilities' && css`
        left: -100%;
    `)}
    ${(props) => (props.title === 'moves' && css`
        left: 100%;
    `)}
`

const OpenModalButtons = styled.button`
    font-size: 50px;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
    display: inline-block;
    position: relative;
    transition: all 250ms;
    background-color: #FB7B7B;
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
        background-color: #944D4D;
        transition: all 250ms;
        pointer-events: none;
    }

    ${(props) => (props.title === 'abilities' && css`
        padding: 30px 40px 30px 400px;
        border-radius: 0 900px 100px 0;
        &::before {
            left: 0;
        }
    `)}

    ${(props) => (props.title === 'moves' && css`
        padding: 30px 400px 30px 40px;
        border-radius: 900px 0 0 100px;
        &::before {
            right: 0;
        }
    `)}

    &:hover::before {
        width: 100%;
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

const ModalTitle = styled.h2 `
    font-size: 50px;
    text-transform: capitalize;
    margin: 30px 0;
    height: 10vh;
`

const ModalAbilitiesName = styled.h2 `
    font-size: 30px;
    margin: 25px 0;
`

const ModalAbilitiesDesc = styled.p `
    font-size: 20px;
    margin-bottom: 30px;
`

const CloseModal = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`