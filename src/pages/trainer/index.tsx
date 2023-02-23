import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {useState} from 'react'
import styled from "styled-components";
import Languages from '../../assets/home.json'
import { HomeHero } from "../../styles/home";
import Trainer from "../../../public/images/trainer.png";
import FlyGif from "../../../public/images/gif/fly-burst.gif";
import NickGif from "../../../public/images/gif/nickhack.gif";

const Home: NextPage = () => {
  const [locale, setLocale] = useState("pt-BR");

  const {[0]:currentLanguage} = Languages.languages.filter((language)=>(language.locale === locale))

  return (
    <>
      <Head><title>KasH | Trainer</title></Head>
      <BannerContainer><h1>Trainer</h1></BannerContainer>
      <Container>
        <h2>Trainer</h2>
        <p>Versão 1.5.1 - 1.5.5</p>
        <p>Valor 30R$</p>
        <Image src={Trainer} alt="trainer"/>
        <h1>Funcionalidades</h1>
        <div className="function">
          <h2>FlyHack e FlyBurst</h2>
          <ContainGif className="gif" src={FlyGif} alt="Fly-Burst" height={"150px"} width={"400px"} objectFit={"cover"}/>
        </div>
        <div className="function">
          <h2>NickHack</h2>
          <ContainGif className="gif" src={NickGif} alt="Fly-Burst" height={"150px"} width={"400px"} objectFit={"cover"}/>
        </div>
      </Container>
    </>
  );
};

export default Home;

const ContainGif = styled(Image)`
  height: 150px;
  object-fit: fill;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;

  h1{
    margin-top: 30px;
  }
  h2{
    margin-left: 20px;
  }

  div{
    width: 100%;
    height: 150px;
    border: 2px solid ${props => props.theme.colors.secundary};
    border-right: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background:linear-gradient(135deg, blue, #ff00005a  );
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    position: relative;
    
  }

  .function{
    margin-bottom: 25px;
  }
`

const BannerContainer = styled(HomeHero)`
  background-image: url('/images/trainer-banner.png');
  height: 10rem;
`
