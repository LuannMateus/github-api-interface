import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body, button {
    color: #fff;
    font-family:  sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export { GlobalStyle };
