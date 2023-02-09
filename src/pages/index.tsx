import type { NextPage } from 'next'
import Head from 'next/head'
import { FcSurvey } from 'react-icons/fc'
import { HeroBenefits } from '../components/HeroBenefits'
import { LinkGenerator } from '../components/LinkGenerator'
import Planos from '../components/Planos'
import { CallActionButton, HomeHero } from './styles/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>KasH | Customizações UI | Lives | Widgets</title>
      </Head>
      <HomeHero>
        <span>Transforme seu jogo em uma experiência única com a nossa customização!</span>
        <h1>Faça agora seu Pedido <FcSurvey /> </h1>
        <CallActionButton>
          Fazer Encomenda
        </CallActionButton>
      </HomeHero>
      <HeroBenefits title="Transforme seu jogo, personalize sua jogabilidade." />
      <Planos/>
    </>
  )
}

export default Home
