import { useState } from "react";
import {
  Image,
  Grid,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import VideoComponent from "../../components/VideoComponent";
import { stylesColor } from "../../styles/colors";
import styles from './Carroseul.module.css'; 

const CarouselComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => setSelectedItem(item);
  const handleCloseModal = () => setSelectedItem(null);

  const images = [
    "https://i.imgur.com/tnapKV1.jpeg",
    "https://i.imgur.com/2hpaP0b.jpeg",
    "https://i.imgur.com/VdT1Qsd.jpeg",
    "https://i.imgur.com/GecindN.jpeg",
    "https://i.imgur.com/r6WKUt6.png",
  ];

  const videos = [
    "2DUZmind1pQ",
    "9OIHSX9cj2Y",
    "AcyNLr1qo4A",
    "LvE6GgJPtlY",
    "bC52U_zGOek",
    "fVhIUMiiD04",
    "jXGRL3J87B4",
    "EfWf8gBxuI4",
    "zD-Fy8e7hF0",
    "7WI-I8wgy9g",
    "rmLHoPQVjQc",
    "YJhqjc4_sn0",
  ];

  return (
    <>
      <Text fontSize="3xl" textAlign="center" mb={4} marginTop={10}
      className={styles['cyberpunk-text']}>
        GALERIA DE FOTOS
      </Text>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }} gap={4} p={4}>
        {images.map((src, idx) => (
          <Image className={styles['box-images']}
            key={idx}
            src={src}
            alt={`Image ${idx + 1}`}
            _hover={{ cursor: "pointer", opacity: 0.8 }}
            onClick={() => handleItemClick(src)}
            cursor="pointer"
          />
        ))}
        {videos.map((link, idx) => (
          <VideoComponent  key={idx} link={link} />
        ))}
      </Grid>

      <Modal isOpen={!!selectedItem} onClose={handleCloseModal} size="6xl">
        <ModalOverlay />
        <ModalContent
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg={stylesColor.backgroundColor}
        >
          <ModalCloseButton bg="red.700" />
          <ModalBody p={4} bg={stylesColor.backgroundColor}>
            {selectedItem && <Image src={selectedItem} alt="Selected Item" width="100%" />}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CarouselComponent;
