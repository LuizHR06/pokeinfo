import { PulseLoader } from "react-spinners"
import styled from "styled-components"

export const Loading = (props) => {
    return (
        <>
            <LoadingContainer>
                <PulseLoader
                    color='#cc3629'
                    loading={props.loading}
                    size={50}
                    aria-label="Loading Spinner"
                />
            </LoadingContainer>
        </>
    )
}

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 100%;
    heigth: 100vh;
`