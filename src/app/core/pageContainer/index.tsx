import { Box, Flex } from "@chakra-ui/react";
import Head from "next/head";
import { FormButton } from "../../../components/FormButton";
import { stylesColor } from "../../../styles/colors";
import Footer from "../Footer";
import Header from "../Header";

export const PageContainer = ({ children }: { children: any }) => {
 
  return (
    <>
      <Head>
        <title>KasH | Customizações UI | Widgets</title>
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      
      <Header />
      <Flex
        bg={stylesColor.backgroundColor}
        justify="center"
        borderBottom={"2px"}
        borderColor={"GrayText"}
        paddingBottom={70}
      >
        <Box
          marginTop={50}
          maxW={1500}
          bg={stylesColor.backgroundColor}
          textColor={stylesColor.textColor}
          width={"100%"}
          minHeight={"100vh"}
        >
          
          {children}

        </Box>
        <Box position={"fixed"} bottom={"34px"} right={"20px"} zIndex={9}>
        </Box>
      </Flex>
      <Footer />

    </>
  );
};
