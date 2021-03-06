// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const theme = {
  primaryOrange: '#fd9d61',
  secondaryOrange: '#feca53',
  primaryBlue: "#00aeef",
  secondaryBlue: "#096fb9",
  primaryBlack: '#2c3e50',
  primaryGray: '#ecedee',
  secondaryGray: '#F7F7F7'
};

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
    transition: all 300ms ease;
    &:hover,
    &:active {
      color: ${props => props.theme.primaryOrange};
    }
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
