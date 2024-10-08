import { Box, Flex, Text } from "@chakra-ui/react";

const HighlightBlock = ({ title, description }:{title:string, description:string}) => {


  return (
    <Box
      p={4}
      rounded="md"
      marginTop={2}
      mb={2}
      flexBasis={{ base: "100%", md: "30%" }}
      transition="background-color 0.3s, opacity 0.3s"
      position="relative"
      overflow="hidden"
      bgGradient="linear(to left, #201320, #e40e0ea6)"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        zIndex={-1}
        opacity={0.8}
      />
      <Text fontSize="xl" fontWeight="bold" mb={1} color="white" zIndex={1}>
        {title}
      </Text>
      <Text mb={1} fontSize={"small"} color="white" opacity={1} zIndex={1}>
        {description}
      </Text>
    </Box>
  );
};

