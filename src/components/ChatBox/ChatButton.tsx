import Logo from "../../assets/images/light.png";
import { Box, Flex, Image, keyframes,  useToken } from "@chakra-ui/react";
import { useState } from "react";

interface ChatButtonProps {
  onClick: () => void;
}

const pulseAnimation = keyframes`
  0% {
    border-color: #ffe600;
  }
  50% {
    border-color: #ffc812a6;
  }
  100% {
    border-color: #ffe600;
  }
`;

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const borderColor = useToken("colors", isHovered ? "#ffc812a6" : "#ffe600");


  return (
    <Box position="fixed" cursor="pointer" bottom={70} right="2" zIndex={4} borderRadius={"50%"}  
    border="4px"
    borderColor={borderColor}
    bgGradient="linear(to left, #201320, #e40e0ea6)"
    animation={`${pulseAnimation} 3s linear infinite`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>
      <Flex onClick={onClick} width={"50px"}  borderRadius={50} bgGradient="linear(to left, #131312, #e40e0ea6)">
      <Image src={Logo}  alt="logo" height="100%"/>
      </Flex>
    </Box>
  );
};

export default ChatButton;
