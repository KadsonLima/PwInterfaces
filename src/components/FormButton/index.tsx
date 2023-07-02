import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { RiLoginCircleLine } from 'react-icons/ri';
import FormModal from './FormScreen';

export function FormButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button
      sx={{
        height: "2.7rem",
        borderRadius: "20px",
        background: "white",
        border: "2px solid #bd0505",
        padding: "0 1.5rem",
        color: "#bd0505",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bolder",
        transition: "0.2s",
        "&:hover": {
          color: "white",
          background: "#bd0505",
        },
        "@media (max-width: 768px)": {
          fontSize: "xx-small",
          width: "14%",
          borderRadius: "6px",
        },
      }}
        onClick={() => setShowModal(!showModal)}
      >
        <RiLoginCircleLine />
        Fazer Pedido
      </Button>
      {showModal && (
        <FormModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}
