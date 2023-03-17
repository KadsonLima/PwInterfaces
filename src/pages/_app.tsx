import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";


import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import GlobalStyle from '../styles/global';
import { ToogleTheme } from '../components/ToogleTheme';
import { useState } from 'react';
import dark from '../styles/themes/dark';


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark);

  return (
      <ThemeProvider theme={theme}>
        <ToogleTheme theme={theme} setTheme={setTheme}/>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
      </ThemeProvider>
  )
}

export default MyApp
