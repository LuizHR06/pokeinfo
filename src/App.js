import { createGlobalStyle } from 'styled-components';
import './App.css';
import { AppRoutes } from './pages/routes';
import img from './pokedex-background.jpg'

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
  }
  
  body {
    box-sizing: border-box;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    text-align: center;
    height: 100vh;
    width: 100vw;
  }
`

export default App;
