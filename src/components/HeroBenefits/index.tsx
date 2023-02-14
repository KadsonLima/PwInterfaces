import { getClientBuildManifest } from 'next/dist/client/route-loader';
import { FcCollect, FcReadingEbook, FcServices } from 'react-icons/fc';
import { Card, Cards, HeroBenefitsContainer, HeroBenefitsContent } from './styles';

interface IHero {
  title: string
  cubes:string[]
}

export function HeroBenefits({title, cubes}: IHero) {

  console.log(getClientBuildManifest)
  return (
    <HeroBenefitsContainer>
      <HeroBenefitsContent>
        <h2>
          { title }
        </h2>
        <Cards>
          <Card>
            <FcCollect />
            <span>
            {cubes[0]}
            </span>
          </Card>
          <Card>
            <FcReadingEbook />
            <span>
            {cubes[1]}
            </span>
          </Card>
          <Card>
            <FcServices />
            <span>
            {cubes[2]}
            </span>
          </Card>
        </Cards>
      </HeroBenefitsContent>
    </HeroBenefitsContainer>
  )
}
