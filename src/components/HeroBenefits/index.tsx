import { FcCollect, FcReadingEbook, FcServices } from 'react-icons/fc';
import { Card, Cards, HeroBenefitsContainer, HeroBenefitsContent } from './styles';

interface IHero {
  title: string
}

export function HeroBenefits(props: IHero) {
  return (
    <HeroBenefitsContainer>
      <HeroBenefitsContent>
        <h2>
          { props.title }
        </h2>
        <Cards>
          <Card>
            <FcCollect />
            <span>
            É uma excelente maneira de torná-lo mais atrativo e único para o jogador. 
            </span>
          </Card>
          <Card>
            <FcReadingEbook />
            <span>
            Jogadores possam personalizar a interface de acordo com suas preferências pessoais.
            </span>
          </Card>
          <Card>
            <FcServices />
            <span>
            Interface seja acessível para todos os jogadores.
            </span>
          </Card>
        </Cards>
      </HeroBenefitsContent>
    </HeroBenefitsContainer>
  )
}
