import CheckBoxWithImage from "../CheckBoxWithImage";
import styled from "styled-components";
import { useState } from "react";

interface FormUi {
    showModal: boolean;
    setShowModal: Function;
  }
  

export function FormUi({ showModal, setShowModal }: FormUi) {

    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event:any) => {
      setSelectedOption(event.target.value);
    };
  
    return (
      <Modal>
        <h1>Pedido</h1>
        <Form>
          <div className="info">
            <label>Nick : <input /></label>
            <label>Contato : <input /></label>
          </div>
          <h3>Perfect World Server:</h3>
          <div>
            <CheckBoxWithImage />
          </div>
          <div className="service">
            <h3>Serviço:  </h3> 
            <label>
          <input
            type="radio"
            checked={selectedOption === 'convert'}
            onChange={handleOptionChange}
            value="convert"
          /> Converter Interface <span>R$50,00</span></label>
        <label>
          <input
            type="radio"
            checked={selectedOption === 'create'}
            onChange={handleOptionChange}
            value="create"
          /> Cria Interface<span> R$150,00</span>
          </label>
        </div>
        <div className="obs">
            <h3>Observação</h3>
            <textarea></textarea>
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
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
    }

    .obs{
        flex-direction: column;

        textarea{
            width: 80%;
            border-radius: 10px;
            height: 80px;
            padding: 10px;
        }
    }

    .info{
        column-gap: 30px;
    }

    .service{
        gap: 30px;
        label{
            display: flex;
            align-items: center;
            gap: 6px;
        }
    }

    
  `
  
  const Modal = styled.div`
    overflow: auto;
    position: fixed;
    max-width: 775px;
    margin-left: auto;
    margin-right: auto;
    overflow-y: scroll;
    left: 0;
    right: 0;
    top: 10px;
    background-color: ${(props) => props.theme.colors.background};
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
  