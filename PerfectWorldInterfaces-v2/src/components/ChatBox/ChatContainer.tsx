// ChatContainer.tsx
import React, { useState } from "react";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

const ChatContainer: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      {!isChatOpen && <ChatButton onClick={handleOpenChat} />}
      {isChatOpen && <ChatWindow onClose={handleCloseChat} />}
    </>
  );
};

export default ChatContainer;
