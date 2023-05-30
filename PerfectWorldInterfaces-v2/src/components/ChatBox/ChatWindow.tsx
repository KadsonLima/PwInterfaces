// ChatWindow.tsx
import { Box, Text } from "@chakra-ui/react";

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  return (
    <Box
      position="fixed"
      bottom="4"
      right={0}
      w="100%"
      maxWidth="400px"
      height="500px"
      bg="white"
      boxShadow="md"
      zIndex={3}
      borderRadius="md"
      p="4"
    >
      <Text fontSize="lg" fontWeight="bold" mb="4">
        Bem-vindo ao Chat
      </Text>
      {/* Coloque aqui o conteúdo do chat */}
      <Box textAlign="center">
        <button onClick={onClose}>Fechar Chat</button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
