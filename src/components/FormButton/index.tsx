import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { RiLoginCircleLine } from 'react-icons/ri';
import FormModal from './FormScreen';
import { IoDiamondOutline } from 'react-icons/io5'

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
    animation: "pulse 2s infinite alternate",
    zIndex: 10,
    "@keyframes pulse": {
      "0%": {
        transform: "scale(1)",
        background: "white",
        color: "#bd0505",
      },
      "100%": {
        transform: "scale(1.1)",
        background: "#bd0505",
        color: "white",
      },
    },
    "&:hover": {
      animation: "none", // Parar a animação no hover
      color: "white",
      background: "#bd0505",
    },
    "@media (max-width: 768px)": {
      fontSize: "xx-small",
      width: "150px",
      borderRadius: "6px",
    },
  }}
  onClick={() => setShowModal(!showModal)}
>
        <IoDiamondOutline size={15}/> Quero Fazer um Pedido !
      </Button>
      {showModal && (
        <FormModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}
