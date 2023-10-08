import { Flex } from "@chakra-ui/react";
import DynamicBanner from "../../components/Banner";
import ProductSquare from "../../components/ProductSquare";
import { PageContainer } from "../../components/pageContainer";
import AdSense from "../../components/AdSense";



const products = [
  {
    name: "Naruto Ui",
    image:
      "https://portalpopline.com.br/wp-content/uploads/2021/09/naruto-thumb.png",
    description: "50,00 R$",
  },
  {
    name: "Magenta Ui - Para Tela Pequena",
    image:
      "https://i.imgur.com/EQEjMLq.jpg",
      description: "50,00 R$",
  }
 
];

const Shop = () => {
  return (
    <PageContainer>
      <DynamicBanner
        title="Shop"
        width={"100%"}
        height={"200px"}
        fitMode="cover"
        image="https://cdn.discordapp.com/attachments/1107719283150164059/1107720553877475399/KasH_perfect_world_game_background_art_splash_art_5687de61-1525-48bd-bfbc-37011139f7a7.png"
      />
      <AdSense/>
      <Flex p={4} >
        <ProductSquare products={products} />
      </Flex>
    </PageContainer>
  );
};

export default Shop;