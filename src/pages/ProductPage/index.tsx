import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";
import DynamicBanner from "@components/Banner";
import { PageContainer } from "@components/pageContainer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const ProductPage: React.FC = () => {
  return (
    <PageContainer>
         <DynamicBanner title="Perfect World Interfaces" width={"100%"} height={"200px"} fitMode="cover" image="https://cdn.discordapp.com/attachments/1107719283150164059/1107720553877475399/KasH_perfect_world_game_background_art_splash_art_5687de61-1525-48bd-bfbc-37011139f7a7.png"  />
      <Flex p={4}  flexDirection="column" justifyContent="space-evenly" alignItems="center" textAlign="center">
        <Heading as="h1" mb={4}>
          Nome do Produto
        </Heading>

        <Flex style={{ maxWidth: "1050px", margin: "0 auto" }} >
        <Carousel showThumbs={true} dynamicHeight={true} emulateTouch={true}>
          <Box>
            <img
              src="https://static.vecteezy.com/ti/fotos-gratis/p3/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg"
              alt="Imagem 1"
            />
          </Box>
          <Box>
            <img
              src="https://img.freepik.com/fotos-premium/papel-de-parede-do-ceu-da-galaxia-generative-ai_438099-14300.jpg?w=360"
              alt="Imagem 2"
            />
          </Box>
          <Box>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi_F7h22N4svG3wXJ_StF6VNkQtYT3mMfCH9Hu2n0laLB9MCX71hIeJF_hE7X__3k9INg&usqp=CAU"
              alt="Imagem 3"
            />
          </Box>
        </Carousel>

        </Flex  >
        <Text mb={4} width="100%"
      maxW="800px">
          Descrição do produto: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies pretium
          lorem, et tristique enim rutrum eu. Nullam luctus purus at est faucibus posuere. Nulla a odio risus.
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
        <AspectRatio ratio={16 / 9}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Video do Produto"
            allowFullScreen
          />
          </AspectRatio>
          </Box>
      </Flex>
    </PageContainer>
  );
};
