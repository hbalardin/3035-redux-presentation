import { createGlobalStyle } from 'styled-components/';

export const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
    }

    button {
      cursor: pointer;
    }

    body, #root {
      height: 100vh;
      width: 100vw;
    }
`;
