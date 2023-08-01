import { Box, Flex } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { stylesColor } from "../../styles/colors";
import Head from "next/head";

export const PageContainer = ({ children }: { children: any }) => {
  //const adsenseScript = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7681391913996548"

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

      </Flex>
      <Footer />

    </>
  );
};
