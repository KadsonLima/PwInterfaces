import { Box, Text, Button } from "@chakra-ui/react";
import { stylesColor } from "@styles/colors";
import { useState } from "react";

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };

  const handleResponse = () => {
    if (selectedOption === "quantidade_carros") {
      return "4";
    }
    

    return "Desculpe, não entendi a pergunta.";
  };

  return (
    <Box
      position="fixed"
      bottom="4"
      right={0}
      w="100%"
      maxWidth="400px"
      height="500px"
      bg={stylesColor.backgroundColor}
      boxShadow="md"
      zIndex={3}
      borderRadius="md"
      p="4"
    >
      <Text fontSize="lg" fontWeight="bold" mb="4">
        Bem-vindo ao Chat
      </Text>

      {selectedOption ? (
        <Text fontSize="lg" mb="4">
          {handleResponse()}
        </Text>
      ) : (
        <>
          <Text fontSize="lg" mb="4">
            Selecione uma opção:
          </Text>
          <Button onClick={() => handleOptionClick("quantidade_carros")} mr="2">
            Quantidade de carros
          </Button>
          {/* Adicione mais opções de interação aqui, se necessário */}
        </>
      )}

      <Box textAlign="center">
        <Button onClick={onClose}>Fechar Chat</Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
