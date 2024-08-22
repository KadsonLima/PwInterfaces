import {
    Box, Flex, IconButton,
    Link, Text, Tooltip
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { blinkAnimation } from "PwInterfaces/src/app/core/Footer";
import { FaDiscord, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { PageContainer } from "../app/core/pageContainer";
import CarouselComponent from "../components/Caroseul";
import styles from '../styles/Home.module.css'; 

const Home: NextPage = () => {
    return (
        <PageContainer >
            <Flex className={styles['cyberpunk-container']} justifyContent={'space-evenly'} width={'100%'} height={'430px'} alignItems={'center'} flexDirection={'column'}>
                <Box className={styles['cyberpunk-bg']}>
                    <Text className={styles['cyberpunk-text']} fontSize={'2xl'}>
                        PERFECT WORLD INTERFACES
                    </Text>
                    <p>Bem-vindo! Sou o KasH, especializado em criar e personalizar interfaces para Perfect World.</p>
                    <p>Aqui você encontra meus principais trabalhos e pode entrar em contato comigo pelas redes sociais.</p>
                    <p>Explore à vontade e conheça o que eu faço!</p>
                </Box>
                <Flex>
                    <Tooltip label="YouTube">
                        <IconButton
                            as={Link}
                            href="https://www.youtube.com/channel/UCzYepeJXM-5J4QGVE_MISnA"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            width={50}
                            mx={2}
                            icon={<FaYoutube size={25} />}
                            variant="ghost"
                            style={{
                                color: "white",
                                background: "linear-gradient(to right, #FF0000, #FF8800)",
                                animation: `${blinkAnimation} 5s linear infinite`,
                            }}
                        />
                    </Tooltip>
                    <Tooltip label="WhatsApp">
                        <IconButton
                            as={Link}
                            href="https://api.whatsapp.com/send?text=Interfaces%20Ui&phone=+5584996443438"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            width={50}
                            mx={2}
                            icon={<FaWhatsapp size={25} />}
                            variant="ghost"
                            style={{
                                color: "white",
                                background: "linear-gradient(to right, #25D366, #128C7E)",
                                animation: `${blinkAnimation} 4s linear infinite`,
                            }}
                        />
                    </Tooltip>
                    <Tooltip label="Telegram">
                        <IconButton
                            as={Link}
                            href="https://telegram.me/kadsonlima"
                            target="_blank"
                            rel="noopener noreferrer"
                            width={50}
                            aria-label="Telegram"
                            mx={2}
                            icon={<FaTelegram size={25} />}
                            variant="ghost"
                            style={{
                                color: "white",
                                background: "linear-gradient(to right, #0088CC, #00BFFF)",
                                animation: `${blinkAnimation} 1s linear infinite`,
                            }}
                        />
                    </Tooltip>
                    <Tooltip label="Discord">
                        <IconButton
                            as={Link}
                            href="https://discord.gg/4NGnhwAUDc"
                            target="_blank"
                            rel="noopener noreferrer"
                            width={50}
                            aria-label="Discord"
                            mx={2}
                            icon={<FaDiscord size={25} />}
                            variant="ghost"
                            style={{
                                color: "white",
                                background: "linear-gradient(to right, #4b00cc, #ff00f2)",
                                animation: `${blinkAnimation} 1s linear infinite`,
                            }}
                        />
                    </Tooltip>
                </Flex>
            </Flex>
            <CarouselComponent />
        </PageContainer>
    );
}

export default Home;
