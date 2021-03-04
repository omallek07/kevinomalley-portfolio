import React from 'react';
import '../styles/shared/fonts.css';
import GlobalStyle, { theme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }) => {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default App;
