import { Flex } from "@chakra-ui/react";
import DynamicBanner from "@components/Banner";
import MaintenanceModal from "@components/MaintenanceModal";
import ProductSquare from "@components/ProductSquare";
import { PageContainer } from "@components/pageContainer";

const products = [
  {
    name: "Produto 1",
    image:
      "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    description: "Descrição do Produto 1",
  },
  {
    name: "Produto 2",
    image:
      "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    description: "Descrição do Produto 2",
  },
  {
    name: "Produto 1",
    image:
      "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    description: "Descrição do Produto 1",
  },
  {
    name: "Produto 2",
    image:
      "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    description: "Descrição do Produto 2",
  },
  {
    name: "Produto 1",
    image:
      "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    description: "Descrição do Produto 1",
  },
  {
    name: "Produto 2",
    image:
      "https://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png",
    description: "Descrição do Produto 2",
  },
];

export const Shop = () => {
  return (
    <PageContainer>
      <MaintenanceModal />
      <DynamicBanner
        title="Shop"
        width={"100%"}
        height={"200px"}
        fitMode="cover"
        image="https://cdn.discordapp.com/attachments/1107719283150164059/1107720553877475399/KasH_perfect_world_game_background_art_splash_art_5687de61-1525-48bd-bfbc-37011139f7a7.png"
      />
      <Flex p={8}>
        <ProductSquare products={products} />
      </Flex>
    </PageContainer>
  );
};
