// Carousel.js
import { Box, Icon, IconButton, Image, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const MiniCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Lista de imagens
  const images = [
    "https://i.imgur.com/lsz7ONJ.png",
    "https://i.imgur.com/FHV0TEY.png",
    "https://i.imgur.com/NRd3PXJ.png",
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Box position="relative" width="400px" height="300px" overflow="hidden" display={"flex"} justifyContent={"center"}>
      <Icon
        as={BiChevronLeft}
        position="absolute"
        top="50%"
        left="10px"
        transform="translateY(-50%)"
        boxSize={10} // Controla o tamanho do ícone
        color="white" // Define a cor do ícone
        cursor="pointer"
        onClick={handlePrev}
      />

      {/* Ícone direito */}
      <Icon
        as={BiChevronRight}
        position="absolute"
        top="50%"
        right="10px"
        transform="translateY(-50%)"
        boxSize={10} // Controla o tamanho do ícone
        color="white" // Define a cor do ícone
        cursor="pointer"
        onClick={handleNext}
      />

      <Image
        src={images[currentIndex]}
        alt={`Imagem ${currentIndex + 1}`}
        width="250px"
        height="100%"
        objectFit="cover"
        borderRadius="md"
      />
    </Box>
  );
};

export default MiniCarousel;
