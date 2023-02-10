import { RiArrowUpCircleLine, RiCheckLine, RiCloseLine } from 'react-icons/ri'
import { CallToAction } from '../CallToAction'
import { HeroBenefits } from '../HeroBenefits'
import { CardPlan, PricingContainer, Section } from './styles'

export default function Planos() {
  return(
    <Section>
      <PricingContainer>
        <CardPlan>
          <p>Converter Versão</p>
          <div>
            <h3>R$ 50,00</h3>
            <p>Convertar sua Interface para outra Versão</p> 
          </div>
          <div className='second-session'>Está incluso nesse plano</div>
          <ul>
            <li>
              <RiCheckLine />
              <span> Correção de bugs</span>
            </li>
            <li>
              <RiCheckLine />
              <span> Agilidade, prazo de até 1 dia </span>
            </li>
            <li>
              <RiCloseLine />
              <span> Personalização</span>
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
