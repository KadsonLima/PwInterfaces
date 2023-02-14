import type { NextPage } from 'next'
import Image from 'next/image'
import Woman from '../../public/images/mulher.png'
import Abissal from '../../public/images/racas_abissal_ilustracao.png'
import Head from 'next/head'
import { FcSurvey } from 'react-icons/fc'
import { HeroBenefits } from '../components/HeroBenefits'
import { IoLogoWhatsapp } from 'react-icons/io'
import Planos from '../components/Planos'
import { CallActionButton, HomeHero } from '../styles/home'
import Link from 'next/link'
import { LanguageProvider } from '../contexts/LangContext'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>KasH | Customizações UI | Lives | Widgets</title>
      </Head>
      <LanguageProvider>
      <HomeHero>
        <div className='casa'>
            <Image src={Abissal} alt="Abissal"/>
            <Image src={Woman} alt="mulher"/>  
        </div>
        <h1>O pais que vc está é :</h1>
        <span>Transforme seu jogo em uma experiência única com a nossa customização!</span>
        <h1>Faça agora seu Pedido <FcSurvey /> </h1>
        <CallActionButton >
        <Link href="https://api.whatsapp.com/send?text=Interfaces%20Ui&phone=+5584996443438"  passHref>
          <a target="_blank" rel="noopener noreferrer">
          Entrar em Contato <IoLogoWhatsapp/>
          </a>
        </Link>
        </CallActionButton>
      </HomeHero>
      <HeroBenefits title="Transforme seu jogo, personalize sua jogabilidade." />
      <Planos/>
      </LanguageProvider>
    </>
  )
}

export default Home
