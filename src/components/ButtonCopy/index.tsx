import { Button, Flex, useClipboard } from "@chakra-ui/react";

export function ButtonCopy({ link , texto}: { link: string, texto:string }) {


  return (
    <>
      <Flex mb={2} >
        <Button
          onClick={()=>window.open(link)}
          sx={{animation: "pulse1 2s infinite alternate",
    "@keyframes pulse1": {
      "0%": {
        transform: "scale(1)",
        background: "blue.400",
        color: "whiteAlpha.800",
      },
      "100%": {
        transform: "scale(1.1)",
        background: "white",
        color: "blue.400",
      },
    },}}
        >
          {texto}
        </Button>
      </Flex>

  
    </>
  );
}
