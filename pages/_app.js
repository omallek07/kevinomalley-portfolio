import React, { Component } from 'react';
import '../styles/shared/fonts.css';
import GlobalStyle, { theme } from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';

class App extends Component {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    };
    return {pageProps};
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
    )
  }
}

export default App;
