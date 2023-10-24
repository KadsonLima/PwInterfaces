import { Box, Text, Link, Image } from "@chakra-ui/react";
import { PaymentDetails } from "../../interface/payment";

const Object = process.env.NEXT_PUBLIC_MY_OBJECT;
const ObjectJSON = Object && JSON.parse(Object);


const PaymentCard = ({ paymentDetails }: { paymentDetails: PaymentDetails }) => {


    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            mb={4}
            boxShadow="md"
            marginTop={8}
        >
            <Text as="h2" fontSize="xl" mb={2}>
                Detalhes da Conta:
            </Text>
            <Text as="h3">{paymentDetails?.description}</Text>

            <Image
                mx="auto" // Centraliza horizontalmente
                width={500}
                height={'auto'}
                src="https://i.imgur.com/4F3l8lY.png"
                marginBottom={7}
                alt="Número da conta"
            />
            <Text as="h2" fontSize="xl" mt={4}>
                Status da Compra:
            </Text>
            {paymentDetails?.status ? <Text as="h2" color={"green.300"}>
                APROVADO
            </Text> : <Text as="h2" color={"yellow.300"}>
                EM AGUARDO
            </Text>}
            {paymentDetails?.status === "approved" && (
                <Link target="_blank" href={`https://www.mediafire.com/file/${ObjectJSON[paymentDetails?.description]}`} style={{color:"#00e7ff", textDecoration:"underline"}}>
                    Link da Interface para Download !!
                </Link>
            )}
        </Box>
    );
};

export default PaymentCard;