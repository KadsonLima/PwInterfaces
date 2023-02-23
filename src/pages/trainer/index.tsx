import type { NextPage } from "next";
import Head from "next/head";
import {useState} from 'react'
import styled from "styled-components";
import Languages from '../../assets/home.json'
import { HomeHero } from "../../styles/home";

const Home: NextPage = () => {
  const [locale, setLocale] = useState("pt-BR");

  const {[0]:currentLanguage} = Languages.languages.filter((language)=>(language.locale === locale))

  return (
    <>
      <Head><title>KasH | Gallery</title></Head>
      <BannerContainer><h1>Trainer</h1></BannerContainer>
    </>
  );
};

export default Home;


const BannerContainer = styled(HomeHero)`
  background-image: url('/images/trainer-banner.png');
  height: 10rem;
`
