import { Box, Text, SimpleGrid, AspectRatio } from "@chakra-ui/react";
import { keyframesAnimations} from "@styles/keyframes";

const VideoBanner = () => {

  return (
    <Box marginBottom={50}>
      {/* Vídeo do YouTube */}
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={4} color={"#fff"} animation={`${keyframesAnimations.shine} 6s linear infinite`}>
          Compilado
        </Text>
        <Box
      mx="auto"
      width="100%"
      maxW="800px"
      height="auto"
      padding={2}
      mb={8}
      position="relative"
      overflow="hidden"
    >
      <Box
        as="div"
        position="absolute"
        top={0}
        width="100%"
        height="100%"
        left={0}
        backgroundImage="linear-gradient(to left, #aa0a0a, black, #bd0505)"
        animation={`${keyframesAnimations.spin} 10s linear infinite`}
      />
      <AspectRatio ratio={16 / 9}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/nWbuM0QjXRg`}
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </Box>

      {/* Planos com preços e serviços */}
      <Box px={4}>
        <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={4} color={"#fff"} animation={`${keyframesAnimations.shine} 6s linear infinite`}>
          Serviços
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          <Box
            bgGradient="linear(to left, #201320, #e40e0ea6)"
            p={6}
            rounded="md"
            boxShadow="md"
            textAlign="center"
            animation={`${keyframesAnimations.shine} 6s linear infinite`}
          >
            <Text fontSize="2xl" fontWeight="bold" color={"#fff"} mb={4}>
              Basic
            </Text>
            <Text fontSize="sm" mb={4} color={"#fff"}>
              Converter UI<br/>Shop UI
            </Text>
            <Text fontSize="lg" fontWeight="bold" color={"#fff"}>
              R$50,00
            </Text>
          </Box>
          <Box
            bgGradient="linear(to left, #1d0a3f, #e40e0ea6)"
            p={6}
            rounded="md"
            boxShadow="md"
            textAlign="center"
            animation={`${keyframesAnimations.shine} 6s linear infinite`}
          >
            <Text fontSize="2xl" fontWeight="bold" mb={4}  color={"#fff"}>
              Criação Interface Basic
            </Text>
            <Text fontSize="sm" mb={4}  color={"#fff"}>
              Map, HP, Target, Bars Custom
            </Text>
            <Text fontSize="lg" fontWeight="bold"  color={"#fff"}>
              R$150,00
            </Text>
          </Box>
          <Box
            bgGradient="linear(to left, #201320, #db990bfc)"
            p={6}
            rounded="md"
            boxShadow="md"
            textAlign="center"
            animation={`${keyframesAnimations.shine} 6s linear infinite`}
          >
            <Text fontSize="xl" fontWeight="bold" mb={4}  color={"#fff"}>
            Criação Interface Premium
            </Text>
            <Text fontSize="sm" mb={4}  color={"#fff"}>
            Map, HP, Target, Bars Custom<br/>
              Abas Customizadas<br/>
              Telas dos Atalhos: T , G , F, C , B <br/>
              Gif dentro do Jogo
            </Text>
            <Text fontSize="lg" fontWeight="bold"  color={"#fff"}>
              R$200,00
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default VideoBanner;
