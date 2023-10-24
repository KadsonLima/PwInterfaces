import { Box, Text, Link, Image } from "@chakra-ui/react";
import { PaymentDetails } from "../../interface/payment";

const Object = process.env.NEXT_PUBLIC_MY_OBJECT;
const ObjectJSON = Object && JSON.parse(Object);

const imagesCompra = {
    "KasH Ui - Mapa Grande e Daimon Reta": "https://pbs.twimg.com/profile_images/1149913362/perfectworld-dot-com_400x400.png",
    "KasH Ui - Magenta Small Screen": "https://cdn.awsli.com.br/600x450/1775/1775301/produto/194356629/b0c768c1g3-ps02-y13p5631pp.jpg",
    "KasH Ui - Blue Small Screen": "https://img.freepik.com/premium-photo/natural-marble-pattern-background_1258-22160.jpg",
    "KasH Ui - Gengar ": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgYp3Lc1aKHEcQu9ZtLt0MoyWxoEEeuJs6w&usqp=CAU",
    "Flamengo Ui": "https://lncimg.lance.com.br/cdn-cgi/image/width=3840,quality=75,format=webp/uploads/2023/03/31/64275624de0fd.jpeg"
}

const PaymentCard = ({ paymentDetails }: { paymentDetails: PaymentDetails }) => {

    const { description, status } = paymentDetails;

    console.log([paymentDetails.description])

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
            <Text as="h3">{description}</Text>

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
            {paymentDetails.status ? <Text as="h2" color={"green.300"}>
                APROVADO
            </Text> : <Text as="h2" color={"yellow.300"}>
                EM AGUARDO
            </Text>}
            {status === "approved" && (
                <Link target="_blank" href={`https://www.mediafire.com/file/${ObjectJSON[description]}`} style={{color:"#00e7ff", textDecoration:"underline"}}>
                    Link da Interface para Download !!
                </Link>
            )}
        </Box>
    );
};

export default PaymentCard;