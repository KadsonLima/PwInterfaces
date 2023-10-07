import { Box, Flex } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import FormModal from '../../components/FormButton/FormScreen';
import { stylesColor } from "../../styles/colors";
import Head from "next/head";
import { FormButton } from "../FormButton";

export const PageContainer = ({ children }: { children: any }) => {
 
  return (
    <>
      <Head>
        <title>KasH | Customizações UI | Widgets</title>
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
          marginTop={70}
          maxW={1500}
          bg={stylesColor.backgroundColor}
          textColor={stylesColor.textColor}
          width={"100%"}
          minHeight={"100vh"}
        >
          
          {children}

        </Box>
        <Box position={"fixed"} bottom={"34px"} right={"20px"} zIndex={9}>
        <FormButton />
        </Box>
      </Flex>
      <Footer />

    </>
  );
};
