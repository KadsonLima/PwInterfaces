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
       <CardPlan>
          <p>UI Individual - Basic</p>
          <div>
            <h3>R$ 150,00</h3>
            <p>Criação de interface personalizada.</p>
          </div>
          <div className='second-session'>Está incluso nesse plano</div>
          <ul>
            <li>
              <RiCheckLine />
              <span> Map, HP, Target, Bars Custom</span>
            </li>
            <li>
              <RiCheckLine />
              <span> Unique UI</span>
            </li>
            <li>
              <RiCheckLine />
              <span> Trainer 10 days Test</span>
            </li>
            <li>
              <RiCloseLine />
              <span> GFX custom </span>
            </li>
          </ul>
  </CardPlan>
      </PricingContainer>
    </Section>
  )
}
