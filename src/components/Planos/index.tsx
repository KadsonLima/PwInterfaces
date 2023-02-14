import { RiArrowUpCircleLine, RiCheckLine, RiCloseLine } from 'react-icons/ri'
import { CallToAction } from '../CallToAction'
import { HeroBenefits } from '../HeroBenefits'
import { CardPlan, PricingContainer, Section } from './styles'

interface PlanosType{
  bgTitle:string;
  scheme:{
    title:string
    price:string
    subtitle:string
    option:string
    checks:string[]
  }
}

export default function Planos({bgTitle, scheme}:PlanosType) {
  return(
    <Section>
      <div className='planos'>{bgTitle}</div>
      <PricingContainer>
        <CardPlan>
          <p>{scheme.title}</p>
          <div>
            <h3>{scheme.price}</h3>
            <p>{scheme.subtitle}</p> 
          </div>
          <div className='second-session'>{scheme.option}</div>
          <ul>
            <li>
              <RiCheckLine />
              <span> {scheme.checks[0]}</span>
            </li>
            <li>
              <RiCheckLine />
              <span> {scheme.checks[1]}</span>
            </li>
            <li>
              <RiCloseLine />
              <span> {scheme.checks[2]}</span>
            </li>
          </ul>
        </CardPlan>
        {/**<CardPlan>
          <p>UI Individual</p>
          <div>
            <h3>R$ 150,00</h3>
            <p>Criação de interface personalizada.</p>
          </div>
          <div className='second-session'>Está incluso nesse plano</div>
          <ul>
            <li>
              <RiCheckLine />
              <span> 1 Campanha ativa </span>
            </li>
            <li>
              <RiCheckLine />
              <span> 3 Links por campanha </span>
            </li>
            <li>
              <RiCloseLine />
              <span> Tracking de leads  </span>
            </li>
            <li>
              <RiCloseLine />
              <span> Gráficos de acesso  </span>
            </li>
          </ul>
        </CardPlan>
        <CardPlan>
          <p>UI Guild</p>
          <div>
            <h3>R$ 200,00</h3>
            <p>Estamos em beta! por enquanto tudo é grátis</p>
            
          </div>
          <div className='second-session'>Está incluso nesse plano</div>
          <ul>
            <li>
              <RiCheckLine />
              <span> 1 Campanha ativa </span>
            </li>
            <li>
              <RiCheckLine />
              <span> 3 Links por campanha </span>
            </li>
            <li>
              <RiCloseLine />
              <span> Tracking de leads  </span>
            </li>
            <li>
              <RiCloseLine />
              <span> Gráficos de acesso  </span>
            </li>
          </ul>
  </CardPlan>**/}
      </PricingContainer>
    </Section>
  )
}
