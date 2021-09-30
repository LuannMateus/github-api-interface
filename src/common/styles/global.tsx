import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    max-width: 100%;

    height: 100vh;
    width: 100%;
    
  }

  body, button {
    color: #fff;
    font-family:  sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  /* 
    *sm
    @media screen and (max-width: 569px) {
    }
      * md
    @media screen and (max-width: 799px) {
    }
      * lg
    @media screen and (max-width: 999px) {
    }
      * xl
    @media screen and (min-width: 1000px) {
    }
  */
`;

export { GlobalStyle };
