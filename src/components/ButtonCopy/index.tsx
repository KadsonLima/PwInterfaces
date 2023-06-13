import { Button, Flex, useClipboard } from "@chakra-ui/react";
import { stylesColor } from "@styles/colors";


export function ButtonCopy() {
    const { onCopy, hasCopied } = useClipboard("903386eb-8cfe-43bd-905d-6ef809dbcfd1");
    
    return (
      <>
        <Flex mb={2}>
          <Button color={stylesColor.primaryColor} bg="white" onClick={onCopy}>{hasCopied ? "Chave Copiada!" : "Copiar Chave Pix"}</Button>
        </Flex>
      </>
    )
  }