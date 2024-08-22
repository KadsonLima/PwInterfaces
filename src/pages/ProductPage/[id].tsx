import { AspectRatio, Box, Flex, Heading, Text } from "@chakra-ui/react";
import DynamicBanner from "../../components/Banner";
import { PageContainer } from "../../app/core/pageContainer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";
import { products } from "../../constants/products";
import { ButtonCopy } from "../../components/ButtonCopy";
import Image from "next/image";

const ProductPage: React.FC = () => {
  const router = useRouter();
  const id  = Number(router.query.id);
  
  const dataUi = products[id];

  const array = dataUi?.images;

  const images = array?.map((image:any) => (
    <Box width="100%" key={image}>
      <img src={image} alt={image}  />
    </Box>
  ));

  return (
    <PageContainer>
      <DynamicBanner
        title="Perfect World Interfaces"
        width={"100%"}
        height={"200px"}
        fitMode="cover"
        image="https://cdn.midjourney.com/e6df846c-3df4-4e00-b53c-98ec17a3dda7/0_1.png"
      />
      <Flex p={4} flexDirection="column" justifyContent="space-evenly" alignItems="center" textAlign="center">
        <Heading as="h1" mb={4}>
          {dataUi?.name}
        </Heading>

        <Box w="100%" maxWidth="1600px">
          <Carousel showThumbs={true} dynamicHeight={true} emulateTouch={true}>
            {images}
          </Carousel>
        </Box>

        <Flex alignItems="center" justifyContent="space-evenly" marginBottom={10}  flexDir={["column", "row"]}>
        <Image
        src={"https://i.imgur.com/g4qorI5.png"}
        alt="mercadoPago"
        width={300}
        height={150}/>
          <Box p={4} display="flex" flexDirection={"column"} alignItems={"center"}>
          
            <Text color="white" fontWeight={"semibold"} fontSize={"large"}>Pagamento - Via Mercado Pago</Text>
            <Text fontSize={"sm"}>Aceitando Cartão, Pix, Boleto, etc...</Text>
            <Text fontSize={"sm"}>Ao efetuar o Pagamento, será enviado automaticamente o link para o download</Text>
            
            <Text marginBottom={5}> Valor: {dataUi?.valor}</Text>
            
            <ButtonCopy link={dataUi?.link} texto="Efetuar compra" />
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
