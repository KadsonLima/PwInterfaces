import { Box, Image, Text, Grid, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Product {
  name: string;
  image: string;
  description: string;
}

const ProductSquare = ({ products }: { products: Product[] }) => {
  return (
    <Grid
      w="100%"
      h="100%"
      borderRadius={10}
      templateColumns={{
        base: "repeat(auto-fill, minmax(100px, 2fr))",
        md: "repeat(auto-fill, minmax(200px, 2fr))",
      }}
      gap={5}
      p="20px 20px"
      bg={"whiteAlpha.800"}
    >
      {products.map((product, index) => (
        <Link to={`/products/${index}`} key={index}>
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
            backgroundColor={"#ffffffef"}
            boxShadow="0 2px 4px rgb(87, 85, 85)"
            p={1}
            minHeight="300px" // Definindo uma altura mínima fixa
          >
            <Image
              src={product.image}
              alt={product.name}
              objectFit="cover"
              borderBottom="2px solid #860505"
              w={"100%"}
              height="150px"
              borderRadius="6px 6px 0 0"
            />
            <Flex p={1} alignItems="center" flexDirection="column" justifyContent="center">
              <Text fontWeight="bold" fontSize={{ base: "11px", md: "medium" }} color={"blackAlpha.800"}>
                {product.name}
              </Text>
              <Text fontSize="xs" mt={2} color={"blackAlpha.800"} display={{ base: "none", md: "block" }}>
                {product.description}
              </Text>
            </Flex>
          </Box>
        </Link>
      ))}
    </Grid>
  );
};

export default ProductSquare;
