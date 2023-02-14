import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";


import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import GlobalStyle from '../styles/global';
import { ToogleButton, ToogleTheme } from '../components/ToogleTheme';
import { useState } from 'react';
import light from '../styles/themes/light';


function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light);

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
