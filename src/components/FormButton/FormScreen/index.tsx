import { useEffect, useState } from "react";
import {
  Text,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,
  Button,
  CloseButton,
  ChakraProvider,
  extendTheme,
  Spinner,
  useToast,
} from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    dark: {
      900: "#181616", // Cor de fundo escura
      800: "#ffffff", // Cor do texto em branco
      red: "#bd0505", // Cor vermelha para bordas
    },
  },
});

export default function FormModal({
  showModal,
  setShowModal,
}: {
  showModal: boolean;
  setShowModal: Function;
}) {
  const [valores, setValores] = useState([50, 150, 200]);
  useEffect(() => { console.log(valores)}, [showModal, valores]);

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(showModal);
  const [formValues, setFormValues] = useState({
    nome: "",
    contato: "",
    service: "",
    server: "",
    description: "",
    cupom: "",
  });
  const toast = useToast();

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    if (name === "cupom") {
      if(value.length < 6) return;

      const cupomEncontrado = CUPOMS.find((cupom) => cupom.nome === value.toUpperCase());

      if (cupomEncontrado) {
        if(!cupomEncontrado.offer){
          toast({
            title: "Cupom Não Disponivel.",
            status: "error",
          });
          return;
        }

        setValores(valores.map((valor)=>{
          return valor - (valor * cupomEncontrado.valor);
        }))
        
        toast({
          title: "Cupom Encontrado.",
          status: "success",
        });
      } else {
        toast({
          title: "Cupom Não Encontrado.",
          status: "error",
        });
      }
    }
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch("https://sheetdb.io/api/v1/tpxvb7uy2ba1q", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: formValues }),
    });

    if (response.ok) {
      toast({
        title: "Pedido Criado.",
        description: "Seu Pedido foi enviado com Sucesso.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
      setFormValues({
        nome: "",
        contato: "",
        service: [],
        server: "",
        description: "",
        cupom: "",
      });
    } else {
      setLoading(false);
      toast({
        title: "Error.",
        description:
          "Não foi possivel fazer o envio do seu pedido, por favor entre em contato!.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const choiceService = (name:any) =>{
    setFormValues((prevValues) => ({
      ...prevValues,
      service: name,
    }));

  }

  return (
    <ChakraProvider theme={theme}>
      <Modal isOpen={isOpen} onClose={() => setShowModal(false)}>
        <ModalContent
          bg="#312f2f"
          color="dark.800"
          style={{ border: " solid 3px #bd0505" }}
          padding={4}
        >
          <ModalHeader textAlign="center" fontSize={"2xl"} color={"gold"}>Fazer Pedido</ModalHeader>
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
                  bg="#141313"
                  color="dark.800"
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
                <Flex justifyContent="space-evenly" flexWrap="wrap" rowGap={2}>
                  <Flex
                    flexDirection="column"
                    bg="#bd0505"
                    width={155}
                    height={50}
                    justifyContent="center"
                    align="center"
                    borderRadius={4}
                    fontWeight={700}
                    border={formValues.service == `converter ${valores[0]}` ? "2px solid white" : "none"}
                    _hover={{border:"2px solid white", cursor:"pointer"}}
                    onClick={()=>choiceService(`converter ${valores[0]}`)}
                  >
                    <span>Converter</span>
                    <p>{valores[0]} R$</p>
                  </Flex>
                  <Flex
                    flexDirection="column"
                    bg="#bd0505"
                    width={155}
                    height={50}
                    justifyContent="center"
                    align="center"
                    borderRadius={4}
                    fontWeight={700}
                    border={formValues.service == `converter ${valores[1]}` ? "2px solid white" : "none"}
                    _hover={{border:"2px solid white", cursor:"pointer"}}
                    onClick={()=>choiceService(`converter ${valores[1]}`)}
                  >
                    <span>Ui Basic</span>
                    <p>{valores[1]} R$</p>
                  </Flex>
                  <Flex
                    flexDirection="column"
                    bg="#bda105"
                    width={155}
                    height={50}
                    justifyContent="center"
                    align="center"
                    borderRadius={4}
                    fontWeight={700}
                    border={formValues.service == `converter ${valores[2]}` ? "2px solid white" : "none"}
                    _hover={{border:"2px solid white", cursor:"pointer"}}
                    onClick={()=>choiceService(`converter ${valores[2]}`)}
                  >
                    <span>Ui Premium</span>
                    <p>{valores[2]} R$</p>
                  </Flex>
                </Flex>
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
              <FormControl
                display="flex"
                justifyContent="right"
                marginBottom={5}
                alignItems="center"
              >
                <FormLabel>Cupom/Referência:</FormLabel>
                <Input
                  width="150px"
                  type="text"
                  name="cupom"
                  value={formValues.cupom}
                  onChange={handleInputChange}
                  required={false}
                  bg="#141313"
                  color="dark.800"
                  border="3px solid #bd0505"
                />
              </FormControl>
              <FormControl display="flex" justifyContent="center">
                <Button colorScheme="green" type="submit" w={120}>
                  {loading ? <Spinner /> : "Enviar"}
                </Button>
              </FormControl>
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

const CUPOMS = [
  { nome: "CUPOM10", valor: 0.1, offer: true },
  { nome: "OFERTA20", valor: 0.2, offer: true },
  { nome: "PROMO30", valor: 0.3, offer: true },
  { nome: "KASH40", valor: 0.4, offer: true },
];
