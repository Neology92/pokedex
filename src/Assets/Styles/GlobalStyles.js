import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after{
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'VT323', sans-serif;
        font-size: calc(16px + 0.2vw);
        font-weight: 400;
    }
    
    body {
        padding: 0;
        margin: 0;
        
    }

    `;

export default GlobalStyle;
