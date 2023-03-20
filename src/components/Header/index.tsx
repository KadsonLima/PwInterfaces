import Image from "next/image"
import Link from "next/link"
import { ActiveLink } from '../ActiveLink'
import { SignInButton } from "../FormButton"
import { HeaderContainer, HeaderContent, Nav } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image 
          src="/images/light.png" 
          alt="KasH" 
          width={59} 
          height={62.5} />
        <Nav>
          <ActiveLink activeClassName="active" href="/" key="home">
            <Link href="">Home</Link >
          </ActiveLink>
           <ActiveLink activeClassName="active" href="/gallery" key="home" prefetch>
           <Link href="">Gallery</Link >
          </ActiveLink> 
          {//<ActiveLink activeClassName="active" href="/trainer" prefetch><a>Trainer</a>     </ActiveLink> 
          }
        </Nav>
        <SignInButton />
      </HeaderContent>
    </HeaderContainer>
  )
}
