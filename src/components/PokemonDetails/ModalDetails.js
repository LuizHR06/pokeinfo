import { useState } from "react"
import styled from "styled-components"
import { pokemonAbilities } from "../../services/pokeApi"
import { MovesTable } from "./MovesTable"
import { FilterGenerationButton } from "../buttons/FilterGenerationButton/FilterGenerationButon"

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
            <OpenModal onClick={event => {
                toggleModal()
                if (props.title === 'abilities') {
                    abilitieDesc()
                }
            }}>
                {props.title}
            </OpenModal>
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
                                            <p>{abilityDescriptions[index].effect_entries[1].short_effect}</p>
                                        )}
                                    </li>
                                </ul>
                            )))
                        )}

                        {props.title === 'moves' && (
                            <>
                                {/* <FilterGenerationButton /> */}
                                <MovesTable moves={props.moves}/>
                                {/* <ul>
                                    {props.moves.map((moveId, index) => (
                                        <li key={index}>{moveId.move.name}</li>
                                    ))}
                                </ul> */}
                            </>
                        )}

                        <CloseModal onClick={toggleModal}>Close</CloseModal>
                    </Content>
                </Container>
            )}
        </>
    )
}

const OpenModal = styled.button`
    padding: 10px 20px;
    display: block;
    margin: 100px auto 0;
    font-size: 18px;
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