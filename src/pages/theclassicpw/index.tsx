import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import Languages from "../../assets/home.json";
import { HomeHero } from "../../styles/home";
import UiFree from "../../../public/images/UiFree.jpg";
import FlyGif from "../../../public/images/gif/fly-burst.gif";
import NickGif from "../../../public/images/gif/nickhack.gif";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KasH | TheClassicPW</title>
      </Head>
      <BannerContainer>
        <Image
          src="https://theclassicpw.com/assets/img/logo_season8_full.png"
          width={300}
          height={220}
          objectFit={"cover"}
        />
      </BannerContainer>

      <Container>
        <h2>Interface e Gfx Custom</h2>
        <p>The Classic PW</p>
        <Image src={UiFree} alt="interface" width={960} />
        <div>
          <h2>Interfaces Download</h2>

          <a href="https://www.mediafire.com/file/tk8pwjksrmmk4gx/UiTheClassicFree.rar/file" target="_blank" rel="noopener noreferrer">
            <button>
              <span>Baixar UI</span>
              <i></i>
            </button>
          </a>
        </div>
        <div>
          <h2>GFX Download</h2>
          <a href="https://www.mediafire.com/file/4xyd7intlfpdp8z/gfx-kash.rar/file" target="_blank" rel="noopener noreferrer">
            <button>
              <span>Baixar GFX</span>
              <i></i>
            </button>
          </a>
        </div>
      </Container>
    </>
  );
};

export default Home;

const ContainGif = styled(Image)`
  height: 150px;
  object-fit: fill;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 0;

  h1 {
    margin-top: 30px;
  }
  h2 {
    margin-left: 20px;
  }

  div {
    width: 100%;
    height: 120px;
    border: 2px solid ${(props) => props.theme.colors.secundary};
    border-right: none;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(135deg, blue, #ff00005a);
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    position: relative;
  }

  .function {
    margin-bottom: 25px;
  }

  button {
    position: relative;
    background: #444;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    border: none;
    letter-spacing: 0.1rem;
    font-size: 1rem;
    padding: 1rem 3rem;
    transition: 0.2s;
  }

  button:hover {
    letter-spacing: 0.2rem;
    padding: 1.1rem 3.1rem;
    background: var(#f00000);
    color: var(#f00000);
    /* box-shadow: 0 0 35px var(#f00000); */
    animation: box 3s infinite;
  }

  button::before {
    content: "";
    position: absolute;
    inset: 2px;
    background: #272822;
  }

  button span {
    position: relative;
    z-index: 1;
  }
  button i {
    position: absolute;
    inset: 0;
    display: block;
  }

  button i::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    left: 80%;
    top: -2px;
    border: 2px solid var(#f00000);
    background: #272822;
    transition: 0.2s;
  }

  button:hover i::before {
    width: 15px;
    left: 20%;
    animation: move 3s infinite;
  }

  button i::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 2px;
    left: 20%;
    bottom: -2px;
    border: 2px solid var(#f00000);
    background: #272822;
    transition: 0.2s;
  }

  button:hover i::after {
    width: 15px;
    left: 80%;
    animation: move 3s infinite;
  }

  @keyframes move {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(5px);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes box {
    0% {
      box-shadow: #27272c;
    }
    50% {
      box-shadow: 0 0 25px var(#f00000);
    }
    100% {
      box-shadow: #27272c;
    }
  }
`;

const BannerContainer = styled.div`
  background-image: url("/images/trainer-banner.png");
  height: 16rem;

  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
