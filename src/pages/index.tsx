import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { FcSurvey } from "react-icons/fc";
import { HeroBenefits } from "../components/HeroBenefits";
import { FaTelegram , FaWhatsapp} from "react-icons/fa";
import Planos from "../components/Planos";
import { CallActionButton, HomeHero } from "../styles/home";
import {useState} from 'react'
import Languages from '../assets/home.json'

const Home: NextPage = () => {
  const [locale, setLocale] = useState("pt-BR");
  const {[0]:currentLanguage} = Languages.languages.filter((language)=>(language.locale === locale))

  return (


    <>
      <Head>
        <title>KasH | Customizações UI | Lives | Widgets</title>
      </Head>
      <HomeHero>
        <span>
          {currentLanguage.title}
        </span>
        <h1>
          {currentLanguage.description} <FcSurvey />{" "}
        </h1>
        <CallActionButton>
          <a
            href="https://api.whatsapp.com/send?text=Interfaces%20Ui&phone=+5584996443438"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="https://telegram.me/kadsonlima" target="_blank" rel="noopener noreferrer">
            <FaTelegram /> Telegram
          </a>
        </CallActionButton>
      </HomeHero>
      <HeroBenefits title={currentLanguage.subtitle} cubes={currentLanguage.cubes}/>
      <Planos bgTitle={currentLanguage.bgTitle} scheme={currentLanguage.scheme}/>
    </>
  );
};

export default Home;
