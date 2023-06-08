import { Box, Image, Text } from "@chakra-ui/react";

interface Banner {
  width: number | string,
  height: number | string,
  image: string,
  fitMode: any ,
  title:string
}

const DynamicBanner = ({ width, height, fitMode, image, title }:Banner) => {
  
  return (
    <Box  width={width} height={ height } position="relative" borderBottom={"2px"} borderBottomColor={"#860505"}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)",
          zIndex: 1,
        }}
      />
      <Text
      fontFamily="serif"
      fontWeight="bold"
      fontSize={["md", "gl", "xl", "3xl"]} 
      textTransform="uppercase"
      color="#fff"
      textShadow="1px 1px 0px rgba(255, 3, 3, 0.7)"
      textAlign="center"
      pb={2}
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex={1}

    >
      {title}
    </Text>
      <Image src={image} alt="Banner" width="100%" height="100%" objectFit={fitMode} zIndex={2} />
    </Box>
  );
};

export default DynamicBanner;
