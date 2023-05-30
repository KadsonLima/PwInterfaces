import { useState } from "react";
import { Image, Grid, Text, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import VideoComponent from "@components/VideoComponent";
import { stylesColor } from "@styles/colors";

const CarouselComponent = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item:any) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" mb={4} color="#fff">
        Galleria
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} p={4}>
        <VideoComponent link="EfWf8gBxuI4"/>
        <Image
          src="https://img.freepik.com/vetores-gratis/vetor-de-design-de-gradiente-colorido-de-passaro_343694-2506.jpg"
          alt="Image 1"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          onClick={() =>
            handleItemClick(
              "https://img.freepik.com/vetores-gratis/vetor-de-design-de-gradiente-colorido-de-passaro_343694-2506.jpg"
            )
          }
          cursor="pointer"
        />
        <Image
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"
          alt="Image 2"
          onClick={() =>
            handleItemClick(
              "https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"
            )
          }
        />
        <VideoComponent link="zD-Fy8e7hF0"/>
        <Image
          src="https://img.freepik.com/vetores-gratis/vetor-de-design-de-gradiente-colorido-de-passaro_343694-2506.jpg"
          alt="Image 1"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          onClick={() =>
            handleItemClick(
              "https://img.freepik.com/vetores-gratis/vetor-de-design-de-gradiente-colorido-de-passaro_343694-2506.jpg"
            )
          }
        />
        <Image
          src="https://png.pngtree.com/element_our/png/20180912/coffee-time-png_91570.jpg"
          alt="Image 2"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          onClick={() =>
            handleItemClick(
              "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            )
          }
        />
      </Grid>

      <Modal isOpen={!!selectedItem} onClose={handleCloseModal} size="xl">
      <ModalOverlay />
      <ModalContent display={"flex"} alignItems="center">
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
