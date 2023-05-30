// ChatButton.tsx
import { Box, Button } from "@chakra-ui/react";

interface ChatButtonProps {
  onClick: () => void;
}

const ChatButton: React.FC<ChatButtonProps> = ({ onClick }) => {
  return (
    <Box position="fixed" bottom={[4, null, 16]} right="2" zIndex={4}>
      <Button onClick={onClick} size="lg">
        Chat
      </Button>
    </Box>
  );
};

export default ChatButton;
