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
                        <h2>{props.title}</h2>

                        {props.title === 'abilities' && (
                            (props.abilities.map((abilityId, index) => (
                                <ul>
                                    <li key={index}>
                                        <h3>{abilityId.ability.name}</h3>
                                        {abilityDescriptions[index] && (
                                            <p>{abilityDescriptions[index].effect_entries
                                                .filter((en) => en.language.name === "en")
                                                .map((en) => en.short_effect)
                                                .join(", ")}</p>
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
    ${(props) => (props.title === 'abilities' && css`
        background-color: #FB7B7B;
        padding: 30px 40px 30px 400px;
        border: none;
        border-radius: 0 900px 100px 0;
    `)}
    ${(props) => (props.title === 'moves' && css`
        background-color: #FB7B7B;
        padding: 30px 400px 30px 40px;
        border: none;
        border-radius: 900px 0 0 100px;
    `)}
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
    max-height: 80vh;
    overflow-y: auto;
    height: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: absolute;
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 30px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 1000px;
`

const CloseModal = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`