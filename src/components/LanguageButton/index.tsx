import { ChoiceButton, FlagCountry } from "./styles"
import Brazil from '../../../public/images/flag/brazil.png'
import Usa from '../../../public/images/flag/english.png'
import Russian from '../../../public/images/flag/russian.png'
import Image from 'next/image'

export interface LanguageType{
  locale:string,
  setLocale: (value: string) => void,
}

export function LanguageButton({locale, setLocale}:LanguageType) {
  
  

  return (
    <ChoiceButton>
      <div className='content-flag'>
        <FlagCountry onClick={()=>{setLocale("pt-BR")}} testando={locale === "pt-BR"}>
          <Image src={Brazil} alt="brazil" />
        </FlagCountry>
        <FlagCountry onClick={()=>{setLocale("en-EN")}} testando={locale === "en-EN"}>
          <Image src={Usa} alt="usa"/>
        </FlagCountry>
        <FlagCountry onClick={()=>{setLocale("ru-RU")}} testando={locale === "ru-RU"}>
          <Image src={Russian} alt="russian"/>
        </FlagCountry>
      </div>
    </ChoiceButton>
  )
}
