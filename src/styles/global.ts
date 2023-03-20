import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  *::selection {
    color: white;
    background: ${props => props.theme.colors.green};
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    height: 100vh;
    min-height: 100vh;
  }

  body html #root {
    height: 100%;
  }
  
  body, input, textarea, select, button {
    font: 400 1rem Poppins, sans-serif;
  }
  button {
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }
  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  @media only screen and (max-width: 768px) {
    .casa img{
      visibility: hidden;
    }
    
    h1 {
    font-size: 1.8rem;
    }

    span {
    font-size: 0.8rem;
    }


  } 

  input[type="radio"]{
      display: none;
    }

    .ativado{
      border: 2px solid #6a040f;
      background-color: #faa307;
      color: #9d0208;
      box-shadow: 0 8px 16px 0 #9d0208, 0 6px 20px 0 #9d0208;
      font-weight: 600;
    }

    .desativado{
      border: 2px solid #4a4e69;
      background-color: #03071e;
      font-weight: 600;
    }

   
`;
