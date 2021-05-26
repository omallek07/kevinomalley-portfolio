import React from 'react';
import '../styles/shared/fonts.css';
import GlobalStyle, { theme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { UserProvider } from '@auth0/nextjs-auth0';


const App = ({ Component, pageProps }) => {
  return (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  </ThemeProvider>
  )
}

export default App;
