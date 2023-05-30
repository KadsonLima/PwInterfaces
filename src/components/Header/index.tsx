import Image from "next/image"
import Link from "next/link"
import { ActiveLink } from '../ActiveLink'
import { SignInButton } from "../FormButton"
import { HeaderContainer, HeaderContent, Nav } from "./styles"

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Nav>
          <ActiveLink activeClassName="active" href="/" key="home">
            <a>Home</a >
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/gallery" key="gallery" prefetch>
           <a>Gallery</a >
          </ActiveLink>
           <ActiveLink activeClassName="active" href="/theclassicpw" key="theClassicPw" prefetch>
           <a>TheClassic</a >
          </ActiveLink> 
          {//<ActiveLink activeClassName="active" href="/trainer" prefetch><a>Trainer</a>     </ActiveLink> 
          }
        </Nav>
        <Link href="/">
      <a>
        <Image 
          src="/images/light.png" 
          alt="KasH" 
          width={59} 
          height={62.5} />
          </a>
          </Link>
        <SignInButton />
      </HeaderContent>
    </HeaderContainer>
  )
}
