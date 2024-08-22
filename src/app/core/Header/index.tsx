import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, IconButton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router"; // Importe o useRouter
import { useState } from "react";
import { stylesColor } from "../../../styles/colors";
import Logo from "../../../assets/images/light.png";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Flex
    bg={stylesColor.backgroundColor}

      justify="center"
      borderBottom={"2px"}
      borderColor={"black"}
      position={"fixed"}
      left={0}
      top={0}
      w="100%"
      zIndex={99}
    >
      <Flex
        as="header"
        align="center"
        justify="center"
        padding={8}
        height={"50px"}
        boxShadow="md"
        position="relative"
        maxW={1500}
        w="100%"
      >
        {/* Logo 
        <Link href="/">
          <Image src={Logo} alt="logo" height="50" />
        </Link>
        */}
        {/* Rotas no desktop */}
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={2}>
        <NavLink href="/" text="INÍCIO" />
            <NavLink href="/Shop" text="SHOP" />
            <NavLink href="/Tools" text="KASHUB" />
            <NavLink href="/Ferramentas" text="SIMULADORES" />
        </Flex>

        {/* Botão de menu no mobile */}
        <Flex display={{ base: "flex", md: "none" }} align="center" width={"100%"} justifyContent={"space-between"} bg={stylesColor.backgroundColor}>
        <Link href="/">
          <Image src={Logo} alt="logo" height="50" />
        </Link>
          <IconButton
            icon={isExpanded ? <ChevronDownIcon /> : <HamburgerIcon />}
            aria-label={isExpanded ? "Fechar menu" : "Abrir menu"}
            marginRight={2}
            onClick={handleToggle}
          />
        </Flex>

       

        {/* Rotas no mobile */}
        {isExpanded && (
          <Flex
            position="absolute"
            top="100%"
            right={0}
            mt={2}
            mr={2}
            zIndex={10}
            bg={stylesColor.backgroundColor}
            boxShadow="md"
            borderRadius="md"
            overflow="hidden"
            flexDirection={"column"}
            padding={3}
          >
            <NavLink href="/" text="INÍCIO" />
            <NavLink href="/Shop" text="SHOP" />
            <NavLink href="/Tools" text="KASHUB" />
            <NavLink href="/Ferramentas" text="SIMULADORES" />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};

// Componente NavLink para aplicar estilos com base na rota atual
const NavLink = ({ href, text }:any) => {
  const router = useRouter();
  const isActive = router.pathname === href;
    const linkStyle = {
      color: isActive ? "white" : stylesColor.primaryColor,
      fontWeight: "bold",
      borderBottom: isActive ? "2px solid white" : "none",
      marginRight: 4,
    };

  return (
    <Link href={href} style={linkStyle} passHref>

        {text}

    </Link>
  );
};

export default Header;
