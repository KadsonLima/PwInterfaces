import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import { RotatingLines } from 'react-loader-spinner';
import Image from "next/image";

const CHANNEL_ID = "UCzYepeJXM-5J4QGVE_MISnA"
const USER_ID = "zYepeJXM-5J4QGVE_MISnA"
const KEY_API = "AIzaSyDRKl3eo3rRMce7OgHJIyRfYBClR9olXms"
const API=`https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${CHANNEL_ID}&maxResults=25&key=${KEY_API}`
const URL_API = `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=${CHANNEL_ID}&key=${KEY_API}`

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

export const VideosAll = () =>{

    const [loading, setLoading] = useState(false)
    const [videos, setVideos] = useState([])

    useEffect(()=>{
        getVideos();
    }, [])

    const getVideos = async () =>{
        
        try {
            setLoading(true)
            const response = await axios.get(API)

            setVideos(response.data.items)

        }catch(error){
            return error
        }finally{
            setLoading(false)
        }
    }

    const VideosList = videos?.map((video:ListVideos)=>{
        const { id, snippet:{thumbnails:{high}}} = video

        return <VideoBox key={video.id.kind}>
            <Image src={high.url} height={200} width={430}></Image>
                {video.snippet.title}
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
`

const VideoBox = styled.div`
    width: 430px;

    display: flex;
    justify-content: center;
    align-items: center;

    
`
const VideosContainer = styled.div`
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;


`
