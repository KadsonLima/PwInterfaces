import { useState } from "react"
import styled from "styled-components"
import { RotatingLines } from 'react-loader-spinner';
import Image from "next/image";

interface ListVideos{
    id:{
        kind:string
        videoId:string
    }
    snippet:{
        description:string
        publishTime:string
        title:string
        thumbnails:{
            high:{
                url:string
                width:number
                height:number
            }
        }
    }
}

const videos = [
    {   
        img:"https://www.youtube.com/embed/EfWf8gBxuI4",
    },{   
        img:"https://www.youtube.com/embed/YJhqjc4_sn0",
    },{   
        img:"https://www.youtube.com/embed/JmPBw1C2DpM",
    },{   
        img:"https://www.youtube.com/embed/HQC_Sx7WyHo",
    },{   
        img:"https://www.youtube.com/embed/rmLHoPQVjQc",
    },{   
        img:"https://www.youtube.com/embed/OKbLgPDBKHI",
    },{   
        img:"https://www.youtube.com/embed/H6ZAsOFuIWc",
    },{   
        img:"https://www.youtube.com/embed/yQpAL2R6_Gw",
    },{   
        img:"https://www.youtube.com/embed/nWbuM0QjXRg",
    },{   
        img:"https://www.youtube.com/embed/S96AwfVHi_c",
    },
    
]

export const VideosAll = () =>{

    const [loading, setLoading] = useState(false)



    const VideosList = videos?.map((video, index)=>{

        return <VideoBox key={index}>
            <iframe className="video" src={video.img} title="YouTube video player" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </VideoBox>
    })

    

    return <Container>
        {loading ? <RotatingLines strokeColor="#e53238"/> : <VideosContainer>{VideosList}</VideosContainer>}
    </Container>
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    padding-bottom: 100px;
`

const VideoBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 15px;

    .video{
        width: 400px;
        height: 200px;
        border: 2px solid gray;
        border-radius: 10px;
    }

    h3{
        position: absolute;
        right: 15px;
        bottom: 3px;
        color: white;
        text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;

    }
    
`
const VideosContainer = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;


`
