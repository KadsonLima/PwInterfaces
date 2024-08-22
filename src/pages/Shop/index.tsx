import { Flex } from "@chakra-ui/react";
import DynamicBanner from "../../components/Banner";
import ProductSquare from "../../components/ProductSquare";
import { PageContainer } from "../../app/core/pageContainer";
import { products } from "../../constants/products";



const Shop = () => {
  return (
    <PageContainer>
      <DynamicBanner
        title="Shop"
        width={"100%"}
        height={"200px"}
        fitMode="cover"
        image="https://cdn.midjourney.com/e6df846c-3df4-4e00-b53c-98ec17a3dda7/0_2.png"
      />
      <Flex p={4} >
        <ProductSquare products={products} />
      </Flex>
    </PageContainer>
  );
};

export default Shop;