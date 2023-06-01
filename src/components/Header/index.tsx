import { useState } from "react";
import { Box, Flex, IconButton, Image, Link } from "@chakra-ui/react";
import { HamburgerIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { stylesColor } from "@styles/colors";
import Logo from "../../assets/images/light.png";
import { NavLink } from "react-router-dom";


const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Flex bg={stylesColor.backgroundColor} justify="center" 
    borderBottom={"2px"}
    borderColor={"GrayText"}
    position={"fixed"}
    left={0}
    top={0}
    w="100%"
    zIndex={2}
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
    
      <Image src={Logo}  alt="logo" height="100%"/>

      {/* Rotas no desktop */}
      <Flex display={{ base: "none", md: "flex" }} align="center" gap={2}>
      <Link
        as={NavLink}
        to="/"
        color={stylesColor.primaryColor}
        fontWeight="bold"
      >
        Home
      </Link>
      <Link
        as={NavLink}
        to="/shop"
        color={stylesColor.primaryColor}
        fontWeight="bold"
      >
        Shop
      </Link>
      <Link
        as={NavLink}
        to="/"
        color={stylesColor.primaryColor}
        fontWeight="bold"
      >
        TheClassic
      </Link>
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
          <Link href="/" color={stylesColor.primaryColor} fontWeight={"bold"} marginRight={4}>Home</Link>
        <Link href="/shop" color={stylesColor.primaryColor} fontWeight={"bold"} marginRight={4}>Shop</Link>
        <Link href="/" color={stylesColor.primaryColor} fontWeight={"bold"} marginRight={4}>TheClassic</Link>
        </Flex>
      )}
    </Flex>
    </Flex>
  );
};

export default Header;
