// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const theme = {
  primaryBlue: "#0794B4",
  secondaryBlue: "#043157",
  primaryWhite: "#fff"
};

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    font-size: 16px;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1.6rem;
  }
`;

export default GlobalStyle;
