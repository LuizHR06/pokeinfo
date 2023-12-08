import styled from "styled-components"
import { Main } from "../components/MainContainer/Main"
import img from '../pokedex-background.gif'

export const Home = () => {
    return (
        <>
            <Background />
            <MainSection>
                <Main />
            </MainSection>
        </>

    )
}

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(5px);
`;

const MainSection = styled.section`
  position: relative; 
  z-index: 1; 
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;