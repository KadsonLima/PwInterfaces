import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { VideosAll } from "../../components/VideosAll/VideosAll";

const Home: NextPage = () => {

  return (
    <Container>
      <Head><title>KasH | Gallery</title></Head>
      <VideosAll/>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  `
