import { Flex, Box, Heading, Text, Button, AspectRatio, Input, Image } from "@chakra-ui/react";
import DynamicBanner from "../../components/Banner";
import { PageContainer } from "../../components/pageContainer";
import { useState } from "react";
import { PaymentDetails } from "../../interface/payment";
import { Link } from "@chakra-ui/next-js";
import PaymentCard from "./PaymentDetails";


const Tools = () => {

  const [paymentId, setPaymentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);

  const ACCESSTOKEN = process.env.NEXT_PUBLIC_API_KEY;




  const handlePaymentVerification = () => {
    setLoading(true);

    fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${ACCESSTOKEN}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setPaymentDetails(data);
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  };


  return (
    <PageContainer>
      <DynamicBanner
        title="Novo Software KasHub"
        width={"100%"}
        height={"200px"}
        fitMode="cover"
        image="https://cdn.discordapp.com/attachments/1107719283150164059/1107720553877475399/KasH_perfect_world_game_background_art_splash_art_5687de61-1525-48bd-bfbc-37011139f7a7.png"
      />

      <Flex
        direction="column"
        alignItems="center"
        justify="center"
        py={8}
      >
        <Box textAlign="center">
          <Heading as="h2" size="lg" mb={4}>
            KasHub
          </Heading>
          <Text fontSize="md" mb={6}>
            Desenvolvimento de um aplicativo que simplificará todo o processo de download e instalação, sendo compatível tanto com o The Classic quanto com o History. 
          </Text>
          <Image
            mx="auto" // Centraliza horizontalmente
            width={'auto'}
            height={'auto'}
            src="https://i.imgur.com/7hwm9JG.png"
            marginBottom={7}
            alt="Número da conta"
          />
          <Text fontSize="md" mb={6}>O software contará com uma verificação que incluirá recursos como login automático, instalação automática e identificação das interfaces do usuário, permitindo o download direto por meio do aplicativo. Além disso, estou considerando a adição de mais funcionalidades e encorajo aqueles que tiverem ideias a compartilhá-las comigo.</Text>
        </Box>


      </Flex>
    </PageContainer>
  );
};

export default Tools;
