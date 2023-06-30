import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";
import DynamicBanner from "../../components/Banner";
import { PageContainer } from "../../components/pageContainer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
import { products } from "../../constants/products";
import pix from '../../assets/pix.png'
import { ButtonCopy } from "../../components/ButtonCopy";
import Image from "next/image";

const ProductPage: React.FC = () => {
  const router = useRouter();
  const id  = Number(router.query.id);
  
  const dataUi = products[id];

  const array = dataUi?.images;

  const images = array?.map((image:any) => (
    <Box width="100%" key={image}>
      <Image src={image} alt="Imagem 1"  style={{width:"100%",height:"auto"}}  />
    </Box>
  ));

  return (
    <PageContainer>
      <DynamicBanner
        title="Perfect World Interfaces"
        width={"100%"}
        height={"200px"}
        fitMode="cover"
        image="https://cdn.discordapp.com/attachments/1107719283150164059/1107720553877475399/KasH_perfect_world_game_background_art_splash_art_5687de61-1525-48bd-bfbc-37011139f7a7.png"
      />
      <Flex p={4} flexDirection="column" justifyContent="space-evenly" alignItems="center" textAlign="center">
        <Heading as="h1" mb={4}>
          {dataUi?.name}
        </Heading>

        <Box w="100%" maxWidth="1050px">
          <Carousel showThumbs={true} dynamicHeight={true} emulateTouch={true}>
            {images}
          </Carousel>
        </Box>

        <Flex alignItems="center" justifyContent="space-evenly" marginBottom={10}>
          <Image src={pix} alt="chave pix 903386eb-8cfe-43bd-905d-6ef809dbcfd1" width={150} height={150} style={{ border: "2px solid #9d1111" }} />
          <Box p={4}>
            <Text>Pagamento</Text>
            <Text fontSize={"sm"}>Ao fazer o pagamento entrar em contato via Whatsapp informando o server.</Text>
            <Text> Valor: {dataUi?.valor}</Text>
            <ButtonCopy />
          </Box>
        </Flex>

        <Text mb={4} width="100%" maxW="800px" borderBottom={"2px solid #9d1111"} borderTop={"2px solid #9d1111"} p={10}>
          {dataUi?.description}
        </Text>

        <Box mx="auto" width="100%" maxW="800px" height="auto" padding={2} mb={8} position="relative" overflow="hidden">
          <AspectRatio ratio={16 / 9}>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${dataUi?.youtube}`}
              title="Video do Produto"
              allowFullScreen
            />
          </AspectRatio>
        </Box>
      </Flex>
    </PageContainer>
  );
};

export default ProductPage;
