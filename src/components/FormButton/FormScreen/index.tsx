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
  ChakraProvider,
  extendTheme,
} from "@chakra-ui/react";
import axios from 'axios';

// Define o tema personalizado
const theme = extendTheme({
  colors: {
    dark: {
      900: "##181616", // Cor de fundo escura
      800: "#ffffff", // Cor do texto em branco
      red: "#bd0505", // Cor vermelha para bordas
    },
  },
});

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
    server: "",
    description: "",
    cupom:"",
  });

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    console.log(formValues)
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

  
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
    console.log("cupom a enviar", formValues)
    const response = await fetch('https://sheetdb.io/api/v1/tpxvb7uy2ba1q', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formValues }),
    });
    
    const data = await response.json();
    console.log(data);

    setIsOpen(false);
    setShowModal(false);
  };

  return (
    <ChakraProvider theme={theme}> {/* Aplica o tema personalizado */}
      <Modal isOpen={isOpen} onClose={() => setShowModal(false)}>
        <ModalContent bg="#312f2f" color="dark.800" style={{border:" solid 3px #bd0505"}} padding={4}> {/* Define a cor de fundo e a cor do texto */}
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
                  bg="#141313" // Define a cor de fundo
                  color="dark.800" // Define a cor do texto
                  border="3px solid #bd0505"
                />
              </FormControl>
              <FormControl marginBottom={5}>
                <FormLabel>Contato:</FormLabel>
                <Input
                  type="text"
                  name="contato"
                  value={formValues.contato}
                  onChange={handleInputChange}
                  required
                  bg="#141313"
                  color="dark.800"
                  border="3px solid #bd0505"
                />
              </FormControl>
            
              <FormControl marginBottom={5}>
                <FormLabel>Serviço:</FormLabel>
                <Checkbox
                  name="converter"
                  checked={formValues.service.converter}
                  onChange={handleCheckboxChange}
                  marginRight={10}
                  colorScheme="red" // Define a cor do checkbox quando selecionado
                >
                  Converter
                </Checkbox>
                <Checkbox
                  name="criacao"
                  checked={formValues.service.criacao}
                  onChange={handleCheckboxChange}
                  colorScheme="red"
                >
                  Criação
                </Checkbox>
              </FormControl>
              
              <FormControl marginBottom={5}>
                <FormLabel>Servidor:</FormLabel>
                <Input
                  type="text"
                  name="server"
                  value={formValues.server}
                  onChange={handleInputChange}
                  required
                  bg="#141313"
                  color="dark.800"
                  border="3px solid #bd0505"
                />
              </FormControl>
              <FormControl marginBottom={5}>
                <FormLabel>Descrição:</FormLabel>
                <Textarea
                  name="description"
                  value={formValues.description}
                  onChange={handleInputChange}
                  bg="#141313"
                  color="dark.800"
                  border="3px solid #bd0505"
                />
              </FormControl>
              <FormControl display="flex" justifyContent="right" marginBottom={5} alignItems="center">
                <FormLabel>Cupom/Referência:</FormLabel>
                <Input
                  width="150px"
                  type="text"
                  name="cupom"
                  value={formValues.cupom}
                  onChange={handleInputChange}
                  required
                  bg="#141313"
                  color="dark.800"
                  border="3px solid #bd0505"
                />
              </FormControl>
              <Button colorScheme="green" type="submit"> {/* Define a cor do botão */}
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
    </ChakraProvider>
  );
}
