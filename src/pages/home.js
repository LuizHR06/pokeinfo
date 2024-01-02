import styled, { css } from "styled-components"
import { Main } from "../components/MainContainer/Main"
import img from '../assets/images/PokeInfo-MainPage-background.gif'
import { useContext } from "react"
import { ThemeContext, themes } from "../contexts/theme-context"

export const Home = () => {
  const { theme } = useContext(ThemeContext)

    return (
        <>
            <Background />
            <MainSection theme={theme}>
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
  height: 100%;

  ${(props) =>
    props.theme === themes.light
      ? css`
          background-color: rgba(0, 0, 0, 0.4);
        `
      : css`
          background-color: rgba(0, 0, 0, 0.8);
        `}
`;