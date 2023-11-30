import { createGlobalStyle } from 'styled-components';
import './App.css';
import { AppRoutes } from './pages/routes';

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
    box-sizing: border-box;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    background-color: #72A0C1;
  }
`

export default App;
