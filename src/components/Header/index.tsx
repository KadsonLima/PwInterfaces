import Image from "next/image"
import { ActiveLink } from '../ActiveLink'
import { SignInButton } from "../SignInButton"
import { HeaderContainer, HeaderContent, Nav } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image 
          src="/images/light.png" 
          alt="WebZapMe" 
          layout="fixed" 
          width={59} 
          height={62.5} />
        <Nav>
          <ActiveLink activeClassName="active" href="/">
            <a>Home</a>
          </ActiveLink>
           <ActiveLink activeClassName="active" href="/gallery" prefetch>
            <a>Gallery</a>
          </ActiveLink> 
          <ActiveLink activeClassName="active" href="/trainer" prefetch>
            <a>Trainer</a>
          </ActiveLink> 
        </Nav>
        <SignInButton />
      </HeaderContent>
    </HeaderContainer>
  )
}
