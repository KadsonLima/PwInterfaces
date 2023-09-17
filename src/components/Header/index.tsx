import { useState } from "react";
import { useRouter } from "next/router"; // Importe o useRouter
import { Box, Flex, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { stylesColor } from "../../styles/colors";
import Logo from "../../assets/images/light.png";
import Link from "next/link";
import Image from "next/image";
import { FormButton } from "../FormButton";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter(); // Obtenha o objeto router

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Flex
      bg={stylesColor.backgroundColor}
      justify="center"
      borderBottom={"2px"}
      borderColor={"GrayText"}
      position={"fixed"}
      left={0}
      top={0}
      w="100%"
      zIndex={99}
    >
      <Flex
        as="header"
        align="center"
        justify="space-between"
        padding={3}
        height={70}
        boxShadow="md"
        position="relative"
        bg={stylesColor.backgroundColor}
        maxW={1500}
        w="100%"
      >
        {/* Logo */}
        <Link href="/">
          <Image src={Logo} alt="logo" height="60" />
        </Link>

        {/* Rotas no desktop */}
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={2}>
          <NavLink href="/" text="Home" />
          <NavLink href="/Shop" text="Shop" />
          <NavLink href="/Tools" text="Instalador Interfaces" />
          <NavLink href="/Ferramentas" text="Ferramentas" />
        </Flex>

        {/* Botão de menu no mobile */}
        <Box display={{ base: "flex", md: "none" }} bg={stylesColor.backgroundColor}>
          <IconButton
            icon={isExpanded ? <ChevronDownIcon /> : <HamburgerIcon />}
            aria-label={isExpanded ? "Fechar menu" : "Abrir menu"}
            marginRight={2}
            onClick={handleToggle}
          />
        </Box>

        <FormButton />

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
            <NavLink href="/" text="Home" />
            <NavLink href="/Shop" text="Shop" />
            <NavLink href="/Tools" text="Instalador Interfaces" />
            <NavLink href="/Ferramentas" text="Ferramentas" />
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
