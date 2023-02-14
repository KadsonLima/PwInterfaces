import type { NextPage } from "next";
import Image from "next/image";
import Woman from "../../public/images/mulher.png";
import Abissal from "../../public/images/racas_abissal_ilustracao.png";
import Head from "next/head";
import { FcSurvey } from "react-icons/fc";
import { HeroBenefits } from "../components/HeroBenefits";
import { FaTelegram , FaWhatsapp} from "react-icons/fa";
import Planos from "../components/Planos";
import { CallActionButton, HomeHero } from "../styles/home";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KasH | Customizações UI | Lives | Widgets</title>
      </Head>
      <HomeHero>
        <div className="casa">
          <Image src={Abissal} alt="Abissal" />
          <Image src={Woman} alt="mulher" />
        </div>
        <h1>O pais que vc está é :</h1>
        <span>
          Transforme seu jogo em uma experiência única com a nossa customização!
        </span>
        <h1>
          Faça agora seu Pedido <FcSurvey />{" "}
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
      <HeroBenefits title="Transforme seu jogo, personalize sua jogabilidade." />
      <Planos />
    </>
  );
};

export default Home;
