// global styles

import styled, { createGlobalStyle } from "styled-components";
import bgImg from "./images/beach.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Catamaran", sans-serif;
  }

  html {
    height: 100%; 
    width: 100%;
  }

  .container {
    width: 100%;
    height: 100%;
    background-image: url(${bgImg});
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .start, .next, .option {
    margin: 5px;
    border: 2px solid black;
    background-color: transparent;
    padding: 3px;
    line-height: 25px;
  }

  .start {
    font-size: 2rem;

  }
`;
