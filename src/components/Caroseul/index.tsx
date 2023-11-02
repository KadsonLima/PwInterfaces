import { useState } from "react";
import { Image, Grid, Text, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import VideoComponent from "../../components/VideoComponent";
import { stylesColor } from "../../styles/colors";

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
      <Image
          src="https://i.imgur.com/2hpaP0b.jpeg"
          alt="Image 1"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          onClick={() =>
            handleItemClick(
              "https://i.imgur.com/2hpaP0b.jpeg"
            )
          }
          cursor="pointer"
        /><Image
        src="https://i.imgur.com/VdT1Qsd.jpeg"
        alt="Image 1"
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={() =>
          handleItemClick(
            "https://i.imgur.com/VdT1Qsd.jpeg"
          )
        }
        cursor="pointer"
      /><Image
        src="https://i.imgur.com/GecindN.jpeg"
        alt="Image 1"
        _hover={{ cursor: "pointer", opacity: 0.8 }}
        onClick={() =>
          handleItemClick(
            "https://i.imgur.com/GecindN.jpeg"
          )
        }
        cursor="pointer"
      />
        <VideoComponent link="2DUZmind1pQ"/>
        <VideoComponent link="9OIHSX9cj2Y"/>
        <VideoComponent link="AcyNLr1qo4A"/>
        <VideoComponent link="LvE6GgJPtlY"/>
        <VideoComponent link="bC52U_zGOek"/>
        <VideoComponent link="fVhIUMiiD04"/>
        <VideoComponent link="jXGRL3J87B4"/>
        <VideoComponent link="EfWf8gBxuI4"/>
        <Image
          src="https://i.imgur.com/XMMddOb.gif"
          alt="Image 1"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          onClick={() =>
            handleItemClick(
              "https://i.imgur.com/XMMddOb.gif"
            )
          }
          cursor="pointer"
        />
        <Image
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          src="https://i.imgur.com/UqidhpG.gif"
          alt="Image 2"
          onClick={() =>
            handleItemClick(
              "https://i.imgur.com/UqidhpG.gif"
            )
          }
        />
        <VideoComponent link="zD-Fy8e7hF0"/>
        <Image
          src="https://i.imgur.com/r6WKUt6.png"
          alt="Image 1"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          onClick={() =>
            handleItemClick(
              "https://i.imgur.com/r6WKUt6.png"
            )
          }
        />
        <Image
          src="https://i.imgur.com/LhAq27E.gif"
          alt="Image 2"
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          onClick={() =>
            handleItemClick(
              "https://i.imgur.com/LhAq27E.gif"
            )
          }
        />
        <VideoComponent link="7WI-I8wgy9g"/>
        <VideoComponent link="rmLHoPQVjQc"/>
        <VideoComponent link="YJhqjc4_sn0"/>
      </Grid>

      <Modal isOpen={!!selectedItem} onClose={handleCloseModal} size="xl">
      <ModalOverlay />
      <ModalContent display={"flex"} alignItems="center" bg={stylesColor.backgroundColor}>
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
