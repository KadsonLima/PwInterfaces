import { Flex, Box, Heading, Text, Button, AspectRatio, Input, Image } from "@chakra-ui/react";
import DynamicBanner from "../../components/Banner";
import { PageContainer } from "../../components/pageContainer";
import { useState } from "react";
import { PaymentDetails } from "../../interface/payment";
import { Link } from "@chakra-ui/next-js";


const Tools = () => {

  const [paymentId, setPaymentId] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails | null>(null);
  
  const ACCESSTOKEN = process.env.API_KEY;
  const URL = process.env.BASE_URL;
  const Object = process.env.MY_OBJECT;
  const ObjectJSON =  Object && JSON.parse(Object);

  const handlePaymentVerification = () => {
    setLoading(true);

    fetch(`${URL}${paymentId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${ACCESSTOKEN}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setPaymentDetails(data);
        console.log(paymentDetails)
        console.log(ObjectJSON)
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
        title="Resgatar Interface"
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
            Resgatar Interface
          </Heading>
          <Text fontSize="md" mb={6}>
            Digite o Número de operação do Pagamento do Mercado Pago !
          </Text>
          <Image
        mx="auto" // Centraliza horizontalmente
        width={1080}
        height={'auto'}
        src="https://i.imgur.com/KtJZ8Wx.png"
        marginBottom={7}
        alt="Número da conta"
      />
          <Input
        type="text"
        placeholder="ID do pagamento"
        value={paymentId}
        onChange={(e) => setPaymentId(e.target.value)}
        style={{ backgroundColor: 'white', width: '50%' , marginRight:5}}
      />
      <Button onClick={handlePaymentVerification} isLoading={loading}>
        Verificar
      </Button>

      {loading && <p>Verificando pagamento...</p>}

      {paymentDetails && (
        
        <div>
          <h2>Detalhes da Conta:</h2>
          <h3>{paymentDetails.description}</h3>
          <h2>Status da Compra:</h2>
          <h3>{paymentDetails.status}</h3>
          {paymentDetails.status == "approved"&& <Link target="_blank"  href={`https://www.mediafire.com/file/${ObjectJSON[`${paymentDetails.description}`]}`}>Link da Interface para Download !!</Link>}
        
        </div>
      )}

        </Box>

    
      </Flex>
    </PageContainer>
  );
};

export default Tools;
