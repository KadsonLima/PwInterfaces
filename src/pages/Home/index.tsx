import DynamicBanner from "@components/Banner"
import CarouselComponent from "@components/Caroseul"
import ChatContainer from "@components/ChatBox/ChatContainer"
import ServiceHighlights from "@components/HighlightBlock"
import VideoBanner from "@components/VideoBanner"
import { PageContainer } from "@components/pageContainer"




export const Home = () =>{


    return  <PageContainer >
        <DynamicBanner title="Perfect World Interfaces" width={"100%"} height={"200px"} fitMode="cover" image="https://cdn.discordapp.com/attachments/1107719283150164059/1107720553877475399/KasH_perfect_world_game_background_art_splash_art_5687de61-1525-48bd-bfbc-37011139f7a7.png"  />
        <ServiceHighlights/>
        <VideoBanner/>
        <CarouselComponent/>
        <ChatContainer/>
    </PageContainer>

}