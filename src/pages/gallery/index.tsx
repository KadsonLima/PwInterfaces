import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import { FcSurvey } from "react-icons/fc";
import { HeroBenefits } from "../../components/HeroBenefits";
import { FaTelegram , FaWhatsapp} from "react-icons/fa";
import Planos from "../../components/Planos";
import { CallActionButton, HomeHero } from "../../styles/home";
import {useState} from 'react'
import { LanguageButton } from "../../components/LanguageButton";
import Languages from '../../assets/home.json'
import { VideosAll } from "../../components/VideosAll/VideosAll";

const Home: NextPage = () => {
  const [locale, setLocale] = useState("pt-BR");

  const {[0]:currentLanguage} = Languages.languages.filter((language)=>(language.locale === locale))

  return (
    <>
      <VideosAll/>
    </>
  );
};

export default Home;
