import React, { useState } from 'react';
import { Box, Spinner, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import { stylesColor } from '@styles/colors';


const MaintenanceModal: React.FC = () => {
  const gradient = {
    gradientBorder: `linear-gradient(to right, red, black)`,
  };
  const [isOpen, setOpen] = useState(true)

  return (
    <Modal isOpen={isOpen} onClose={() => {setOpen(false)}}>
      <ModalOverlay />
      <ModalContent
        bg={stylesColor.backgroundColor}
        border={`2px solid ${stylesColor.primaryColor}`}
        p={4}
        borderColor={`linear-gradient(to right, ${gradient})`}
      >
        <ModalHeader color={stylesColor.primaryColor}>Site em Manutenção</ModalHeader>
        <ModalCloseButton bg={stylesColor.textColor} border={`2px solid ${stylesColor.textColor}`} p={4} />
        <ModalBody >
          <Box display="flex" justifyContent="center" alignItems="center">
            <Spinner size="xl" speed='1.65s'
   color={stylesColor.primaryColor} />
          </Box>
          <Box textAlign="center" mt={4} color={stylesColor.textColor}>
            O site está passando por manutenção no momento. Por favor, tente novamente mais tarde.
          </Box>
          <Box display="flex" justifyContent="center" mt={4}>
            <Button as="a" href="https://api.whatsapp.com/send?text=Interfaces%20Ui&phone=+5584996443438" bg="green" color="#fff" target="_blank" mr={2}>
              WhatsApp
            </Button>
            <Button as="a" href="https://telegram.me/kadsonlima"  bg="blue" color="#fff" target="_blank">
              Telegram
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MaintenanceModal;