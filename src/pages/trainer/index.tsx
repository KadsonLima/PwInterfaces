import type { NextPage } from "next";
import Head from "next/head";
import {useState} from 'react'
import Languages from '../../assets/home.json'

const Home: NextPage = () => {
  const [locale, setLocale] = useState("pt-BR");

  const {[0]:currentLanguage} = Languages.languages.filter((language)=>(language.locale === locale))

  return (
    <>
      <Head><title>KasH | Gallery</title></Head>
    </>
  );
};

export default Home;
