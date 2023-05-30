import { Box, Text, Button, Flex } from "@chakra-ui/react";
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
      bg="#201e1e"
      boxShadow="md"
      zIndex={3}
      borderRadius="md"
      borderWidth={2}
      borderColor="#c90505"
      p="4"
    ><Flex w="100%" h="100%" position="relative" flexDirection="column" gap={4}>
      <Text fontSize="lg" fontWeight="bold" mb="4" align="center" color="#c90505">
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

      <Box textAlign="center" position="absolute" bottom={0}>
        <Button onClick={onClose}>Fechar Chat</Button>
      </Box>
      </Flex>
    </Box>
  );
};

export default ChatWindow;
