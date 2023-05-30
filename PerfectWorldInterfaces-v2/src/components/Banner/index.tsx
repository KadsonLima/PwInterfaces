import { Box, Image } from "@chakra-ui/react";
import { stylesColor } from "@styles/colors";

const DynamicBanner = ({ width, height, fitMode, image }: { width: number | string, height: number | string, image: string, fitMode: string }) => {
  
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
      <Image src={image} alt="Banner" width="100%" height="100%" objectFit={fitMode} zIndex={2} />
    </Box>
  );
};

export default DynamicBanner;
