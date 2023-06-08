import { Box, Text, Button, Flex, Divider } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { stylesColor } from "@styles/colors";

interface ChatWindowProps {
  onClose: () => void;
}

interface ChatOption {
  question: string;
  answer: string;
  quests: ChatOption[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [selectedOption, setSelectedOption] = useState<string[]>([]);

  const chatOptions: ChatOption[] = [
    {
      question: "Quantidade de carros",
      answer: "Existem 4 carros disponíveis.",
      quests: [
        {
          question: "Quantidade de cores",
          answer: "Existem 4 cores disponíveis.",
          quests: [],
        },
      ],
    },
    {
      question: "Criar Interface",
      answer: "Existem 4 carros disponíveis.",
      quests: []
    }
    // Adicione mais opções de interação aqui, se necessário
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption((prevSelectedOptions) => [...prevSelectedOptions, option]);
  };

  const handleResponse = () => {
    let response: JSX.Element[] = [];

    let currentOptions: ChatOption[] = chatOptions;

    selectedOption.forEach((selected) => {
      const selectedChatOption = currentOptions.find((option) => option.question === selected);
      if (selectedChatOption) {
        response.push(
          <motion.div
            key={selectedChatOption.question}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Text fontSize="lg" mb="4" color={stylesColor.primaryColor}>
              {selectedChatOption.question}
            </Text>
            <Text fontSize="lg" mb="4">
              {selectedChatOption.answer}
            </Text>
            <Divider my="4" />
          </motion.div>
        );
        currentOptions = selectedChatOption.quests;
      }
    });

    if (currentOptions.length > 0) {
      const options = currentOptions.map((option) => (
        <motion.div
          key={option.question}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            key={option.question}
            onClick={() => handleOptionClick(option.question)}
            mr="2"
          >
            {option.question}
          </Button>
        </motion.div>
      ));

      response.push(
        <motion.div
          key="select-option"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Text fontSize="lg" mb="4">
            Selecione uma opção:
          </Text>
          {options}
        </motion.div>
      );
    }

    return response;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
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
        borderWidth={2}
        borderColor="#c90505"
      >
        <Flex w="100%" h="100%" position="relative" flexDirection="column" gap={4}>
          <Flex w="100%" position="absolute" top={0} left={0} justify="center" p={4} bg="#fff" borderRadius="md">
          <Text fontSize="lg"  fontWeight="bold"  align="center" color="#c90505">
            Bem-vindo ao Chat
          </Text>
    
          </Flex>
          <Flex p={4} marginTop={70} flexDirection="column" overflow="auto" marginBottom={70}>
          {selectedOption.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {handleResponse()}
            </motion.div>
          ) : (
            <>
              <Text fontSize="lg" mb="4">
                Selecione uma opção:
              </Text>
              {chatOptions.map((option) => (
                <motion.div
                  key={option.question}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    key={option.question}
                    onClick={() => handleOptionClick(option.question)}
                    mr="2"
                  >
                    {option.question}
                  </Button>
                </motion.div>
              ))}
            </>
          )}
          
          <Box textAlign="center" position="absolute" w="100%" left={0} bottom={4}>
          <Divider my="4" />
            <Button bg={stylesColor.primaryColor} color="#fff" onClick={onClose}>Fechar Chat</Button>
          </Box>
          </Flex>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default ChatWindow;
