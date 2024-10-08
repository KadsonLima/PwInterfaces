import { Box, Image, Text, Grid, Flex } from "@chakra-ui/react";
import NextLink from "next/link";

interface Product {
  id: Number,
    name: string,
    description: String,
    youtube: String,
    images: string[],
    link:String,
    valor: String
}

const ProductSquare = ({ products }: { products: Product[] }) => {
  return (
    <Grid
      w="100%"
      h="100%"
      borderRadius={10}
      templateColumns={{
        base: "repeat(auto-fill, minmax(200px, 2fr))",
        md: "repeat(auto-fill, minmax(300px, 2fr))",
      }}
      gap={5}
      p="20px 20px"
      bg={"#202021"}
    >
      {products.map((product, index) => (
        <NextLink href={`/ProductPage/${index}`} key={index}>
            <Box
              borderWidth="2px"
              borderColor="#860505"
              borderRadius="md"
              overflow="hidden"
              _hover={{ transform: "scale(1.05)", cursor: "pointer" }}
              transition="transform 0.2s"
              _before={{
                content: '""',
                display: "block",
              }}
              position="relative"
              backgroundColor={"#dfd9d9"}
              boxShadow="0 4px 6px black"
              p={1}
              minHeight="300px" // Definindo uma altura mínima fixa
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                objectFit="cover"
                borderBottom="2px solid #860505"
                w={"100%"}
                height="220px"
                borderRadius="6px 6px 0 0"
              />
              <Flex p={1} alignItems="center" flexDirection="column" justifyContent="center">
                <Text fontWeight="bold" fontSize={{ base: "11px", md: "medium" }} color={"blackAlpha.800"}>
                  {product.name}
                </Text>
                <Text mt={2} color={"blackAlpha.800"} fontSize={{ base: "xs", md: "xm" }}>
                  {product.valor}
                </Text>
              </Flex>
            </Box>
        </NextLink>
      ))}
    </Grid>
  );
};

export default ProductSquare;
