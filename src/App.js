import { createGlobalStyle } from 'styled-components';
import { AppRoutes } from './pages/routes';
import PokemonSolid from './assets/fonts/Pokemon-Solid.ttf';


function App() {
  return (
    <div>
      <GlobalStyle />
      <AppRoutes />
    </div>
  );
}

const GlobalStyle = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    overflow-x: hidden;
    box-sizing: border-box; 
  }

  @font-face {
    font-family: 'Pokemon';
    src: url(${PokemonSolid}) format('truetype');
    font-weight: 800;
    font-style: normal;
  }
  
  body {
    height: 100vh;
    width: 100vw;
    text-align: center;
    overflow-x: visible;
  }
`

export default App;
