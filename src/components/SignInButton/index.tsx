import { useState } from "react";
import { RiLoginCircleLine } from "react-icons/ri";
import styled from "styled-components";
import CheckboxWithImage from "../CheckBoxWithImage";
import { Button } from "./styles";

interface FormUi {
  showModal: boolean;
  setShowModal: Function;
}

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

function FormUi({ showModal, setShowModal }: FormUi) {
  return (
    <Modal>
      <h1>Pedido</h1>
      <Form>
        <div>
          <label>Nick : <input /></label>
          <label>Contato : <input /></label>
        </div>
        <label>Server que Joga:</label>
        <div>
          <CheckboxWithImage />
        </div>
      </Form>
      <div className="buttons">
      <SendButton>Enviar</SendButton>
        <CloseButton onClick={() => setShowModal(!showModal)}>
          Fechar
        </CloseButton>
      </div>
    </Modal>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  div{
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`

const Modal = styled.div`
  position: fixed;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 90px;
  background-color: ${(props) => props.theme.colors.background};
  height: 500px;
  z-index: 4;
  border-radius: 15px;
  border: 2px solid #9999;
  padding: 15px;

  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .buttons{
    display:flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
  }
`;
const CloseButton = styled.button`
  width: 100%;
  border-radius: 10px;
  margin-left: 10px;
  background-color: #e53238;
  border: 2px solid #f2f2f2f2;
  font-weight: 900;
  color: #f2f2f2f2;

  &:hover {
    background-color: #942112;
  }

`;
const SendButton = styled.button`
  margin-left: none;
  width: 100%;
  border-radius: 10px;
  background-color: #16dd16;
  border: 2px solid #f2f2f2f2;
  font-weight: 900;
  color: #f2f2f2f2;

  &:hover {
    background-color: #129412;
  }
`;
