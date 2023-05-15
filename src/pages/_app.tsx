import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import GlobalStyle from '../styles/global';
import { ToogleTheme } from '../components/ToogleTheme';
import { useState } from 'react';
import dark from '../styles/themes/dark';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(dark);

  return (
      <ThemeProvider theme={theme}>
        <Analytics />
      <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme={'dark'}/>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
      </ThemeProvider>
  )
}

export default MyApp
