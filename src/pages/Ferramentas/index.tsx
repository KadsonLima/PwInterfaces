import { Flex, Box, Heading, Text, Button, AspectRatio } from "@chakra-ui/react";
import DynamicBanner from "../../components/Banner";
import { PageContainer } from "../../components/pageContainer";
import AdSense from "../../components/AdSense";


const Tools = () => {
  return (
    <PageContainer>
      <AdSense/>
      <Box w="100%" marginTop={3} marginBottom={0} bg={"black"}>
      <iframe
        src="/tools/index.html"
        width="100%"
        height="900px"
      />
      <style jsx>{`
      @import '/tools/css/common.css';
    `}</style>
      </Box>
     


    </PageContainer>
  );
};

export default Tools;
