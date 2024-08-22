import { useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Image, Box, AspectRatio } from "@chakra-ui/react";
import { stylesColor } from "../../styles/colors";
import styles from '../Caroseul/Carroseul.module.css';


const VideoComponent = ({link}:{link:string}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box onClick={handleOpenModal}>
        <Image
        className={styles['box-images']}
          src={`https://img.youtube.com/vi/${link}/maxresdefault.jpg`}
          alt="Thumbnail"
          height="100%"
          objectFit="cover"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
        />
      </Box>
      <Modal isOpen={isOpen} onClose={handleCloseModal} size="5xl">
        <ModalOverlay />
        <ModalContent>
          <ModalBody p={4} bg={stylesColor.backgroundColor}>
        <ModalCloseButton zIndex={2} bg="red.700"/>

          <AspectRatio ratio={16 / 9}>
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${link}`}
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </AspectRatio>

          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoComponent;
