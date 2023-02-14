import { RiLoginCircleLine, RiUser3Line } from 'react-icons/ri'
import { Button } from "./styles"

export function SignInButton() {
  const isUserLoggedIn = false
  return (
    <Button>
      <RiLoginCircleLine />
      Lista de Pedidos
    </Button>
  )
}
