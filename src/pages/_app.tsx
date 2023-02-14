import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";


import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import AppContext from '../contexts/AppContext';
import GlobalStyle from '../styles/global';
import { ToogleButton, ToogleTheme } from '../components/ToogleTheme';
import { useState } from 'react';
import light from '../styles/themes/light';
import { LanguageProvider } from '../contexts/LangContext';


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

  return (
    <AppContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <ToogleTheme theme={theme} setTheme={setTheme}/>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default MyApp
