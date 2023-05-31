import { Flex, Spinner } from "@chakra-ui/react";
import { stylesColor } from "@styles/colors";

export const Loading = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      bg={stylesColor.backgroundColor}
      width="100%"
      minHeight="100vh"
    >
      <Spinner thickness="10px" speed="0.65s" color={stylesColor.primaryColor} size="40%" />
    </Flex>
  );
};