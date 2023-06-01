import { Box, Image, Text, Grid } from "@chakra-ui/react";

interface Product {
  name:string,
  image:string,
  description:string,
}

const ProductSquare = ({ products }:{products:Product[]}) => {
  return (
    <Grid w="100%" templateColumns={{ base: "repeat(auto-fill, minmax(150px, 1fr))", md: "auto auto auto auto" }} gap={4}>
      {products.map((product) => (
        <Box
          key={product.name}
          borderWidth="1px"
          borderRadius="md"
          overflow="hidden"
          _hover={{ transform: "scale(1.05)", cursor:"pointer" }}
          transition="transform 0.2s"
          _before={{
            content: '""',
            display: "block",
          }}
          position="relative"
        >
          <Image
            src={product.image}
            alt={product.name}
            objectFit="cover"
          />
          <Box p={2}>
            <Text fontWeight="bold" fontSize="sm">{product.name}</Text>
            <Text fontSize="xs" mt={2}>{product.description}</Text>
          </Box>
        </Box>
      ))}
    </Grid>
  );
};

export default ProductSquare;
