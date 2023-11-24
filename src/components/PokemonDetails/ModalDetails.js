import { useState } from "react"
import styled from "styled-components"

export const ModalDetails = (props) => {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <OpenModal onClick={toggleModal}>
                {props.title}
            </OpenModal>
            {modal && (
                <Container>
                    <Overlay onClick={toggleModal} />
                    <Content>
                        <h2>{props.title}</h2>

                        {props.title === 'abilities' && (
                            (props.abilities.map((abilityId, index) => (
                                <li key={index}>{abilityId.ability.name}</li>
                            )))
                        )}

                        {props.title === 'moves' && (
                            (props.moves.map((moveId, index) => (
                                <li key={index}>{moveId.move.name}</li>
                            )))
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
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #f1f1f1;
    padding: 14px 28px;
    border-radius: 3px;
    max-width: 600px;
    min-width: 300px;
`

const CloseModal = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;
`
