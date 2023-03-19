import { useState } from "react";
import { RiLoginCircleLine } from "react-icons/ri";
import { FormUi } from "./FormScreen";
import { Button } from "./styles";


export function SignInButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(!showModal)}>
        <RiLoginCircleLine />
        Fazer Pedido
      </Button>
      {showModal && (
        <FormUi showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
}
