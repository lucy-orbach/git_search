import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    position: relative;
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.4em;
    -webkit-font-smoothing: antialiased;
    overflow: hidden;
    background-color: #000;
    color: #fff;
  }
  
  * {
    box-sizing: border-box;
  }
  
  a,
  a:hover,
  a:focus,
  a:link,
  a:visited {
    color: #fff;
    text-decoration: none;
  }
  
  
  h1, h2, h3, h4, h5, h6, p,
  ul ,li, button, form,
  fieldset, input, textarea {
    -webkit-appearance: none;
    -webkit-margin-after: 0;
    -webkit-margin-before: 0;
    margin: 0 0 20px;
    padding: 0;
  }
  
  
  button, input, textarea, fieldset {
    -webkit-appearance: none;
    background-color: transparent;
    border: none;
    color: currentColor;
    font: inherit;
    letter-spacing: inherit;
  }
  
  button:focus,
  input:focus, textarea:focus {
    outline: none;
    box-shadow: none;
  }
  input[type="text"], textarea, fieldset {
    width: 100%;
  }
  ul {
    list-style: none;
  }
  `;

export default GlobalStyle;