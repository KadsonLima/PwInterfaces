import { useEffect, useState } from "react";
import {
  Container,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import axios from 'axios';

export default function FormModal({showModal,setShowModal}:{showModal:boolean, setShowModal:Function}) {

  useEffect(() => {

  }, [showModal])
  

  const [isOpen, setIsOpen] = useState(showModal);
  const [formValues, setFormValues] = useState({
    nome: "",
    contato: "",
    service: {
      converter: false,
      criacao: false,
    },
    server: {
      theclassic: false,
      pwdemo: false,
    },
    description: "",

  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e:any) => {
    const { name, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      service: {
        ...prevValues.service,
        [name]: checked,
      },
    }));
  };

  const handleServerCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      server: {
        ...prevValues.server,
        [name]: checked,
      },
    }));
  };
  

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // Lógica para enviar o formulário
    try {
      const response = await axios.post("https://www.perfectworldinterfaces.com/api/addClient", formValues);
      console.log(response)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsOpen(false);
    setShowModal(false);
  };

  return (
    
      <Modal isOpen={isOpen} onClose={() => setShowModal(false)}>
        <ModalContent>
          <ModalHeader>Pedido</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Nome:</FormLabel>
                <Input
                  type="text"
                  name="nome"
                  value={formValues.nome}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel>Contato:</FormLabel>
                <Input
                  type="text"
                  name="contato"
                  value={formValues.contato}
                  onChange={handleInputChange}
                  required
                />
              </FormControl>
            
              <FormControl marginBottom={5}>
                <FormLabel>Serviço:</FormLabel>
                <Checkbox
                  name="converter"
                  checked={formValues.service.converter}
                  onChange={handleCheckboxChange}
                  marginRight={10}
                >
                  Converter
                </Checkbox>
                <Checkbox
                  name="criacao"
                  checked={formValues.service.criacao}
                  onChange={handleCheckboxChange}
                >
                  Criação
                </Checkbox>
              </FormControl>
              
              <FormControl marginBottom={5}>
                <FormLabel>Servidor:</FormLabel>
                <Checkbox
                  name="theclassicpw"
                  checked={formValues.server.theclassic}
                  onChange={ handleServerCheckboxChange}
                  marginRight={10}
                >
                  TheClassicPw
                </Checkbox>
                <Checkbox
                  name="pwdemo"
                  checked={formValues.server.pwdemo}
                  onChange={handleServerCheckboxChange}
                >
                  PwDemo
                </Checkbox>
              </FormControl>
              <FormControl marginBottom={5}>
                <FormLabel>Descrição:</FormLabel>
                <Textarea
                  name="description"
                  value={formValues.description}
                  onChange={handleInputChange}
                />
              </FormControl>
              <Button colorScheme="green" type="submit">
                Enviar
              </Button>
              <CloseButton
                size="sm"
                onClick={() => setShowModal(false)}
                position="absolute"
                right="8px"
                top="8px"
              />
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
  );
}
