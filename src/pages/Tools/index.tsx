import { Flex, Box, Heading, Text, Button, AspectRatio } from "@chakra-ui/react";
import DynamicBanner from "../../components/Banner";
import { PageContainer } from "../../components/pageContainer";

const Tools = () => {
  return (
    <PageContainer>
      <DynamicBanner
        title="Instalador de Interfaces"
        width={"100%"}
        height={"200px"}
        fitMode="cover"
        image="https://cdn.discordapp.com/attachments/1107719283150164059/1107720553877475399/KasH_perfect_world_game_background_art_splash_art_5687de61-1525-48bd-bfbc-37011139f7a7.png"
      />

      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        py={8}
      >
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            Instalador de Interfaces - 1.5.1 - 1.5.9
          </Heading>
          <AspectRatio ratio={16 / 9} marginBottom={8}>
            <iframe
              width="80%"
              height="80%"
              src={`https://www.youtube.com/embed/4dxR77uw7vQ`}
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </AspectRatio>
          <Text fontSize="md" mb={6}>
            * Auto Instalação
            * Mais compatibilidade
            * Redução de Bug's
            * Compatibilidade de Versões
          </Text>
          <Text fontSize="md" mb={6}>
            Com a nova implementação agora será possivel ter mais facilidade em manutenção e 
            atualizações, após ter alguma atualização no client será preciso só re-instalar a Ui com novo instalador.
          </Text>
        </Box>

        <Button
          colorScheme="blue"
          size="lg"
          borderRadius="full"
          fontWeight="bold"
          px={8}
          py={4}
          _hover={{ boxShadow: "xl" }}
          _active={{ scale: 0.95 }}
          _focus={{ outline: "none" }}
          animation="pulse 2s infinite"
          mt={8}
          onClick={()=>{
            window.open("/InstaladorKasH.rar");
          }}
        >
          Instalador de Interfaces
        </Button>
    
      </Flex>
    </PageContainer>
  );
};

export default Tools;
