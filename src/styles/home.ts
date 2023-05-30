import styled from 'styled-components';

export const HomeHero = styled.section`
  height: 25rem;
  background: #202020;
  background-image: url('https://cdn.discordapp.com/attachments/1107719283150164059/1107720553877475399/KasH_perfect_world_game_background_art_splash_art_5687de61-1525-48bd-bfbc-37011139f7a7.png');
  background-repeat:no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  span,
  h1 {
    margin: 1rem 0;
    z-index: 1;
    
  }

  button {
  
  z-index: 1;
    font-weight: 900;
  }

  span {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: white;
    font-weight: 900;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  z-index: 1;

  }

  h1 {
    font-size: 2.5rem;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  z-index: 1;
  color: #eeeeee;
  }

  .casa{
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 768px) {
    .casa img{
      visibility: hidden;
    }
    
    h1 {
    font-size: 2rem;
    }

    span {
    visibility: hidden;
    }

    
  } 

`;

export const CallActionButton = styled.div`
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  gap: 7px;
  a{
    border-radius: ${props => props.theme.defaultRadiusBorder};
    padding: 0.3rem;
    font-weight: bolder;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    gap: 4px;
    font-size: smaller;

  }

  a:first-child{
    background: #ffff;
    border: 1px solid green;
    color: green;

    &:hover {
    color: #ffff;
    background: green;
    }
  }

  a:nth-child(2) {

    background: #ffff;
    border: 1px solid #1c93e3;
    color: #1c93e3;

    &:hover {
    color: #ffff;
    background: #1c93e3;
    }
  }

  svg {
    width: auto;
    height: 20px;
  }

  transition: 0.2s;

  
`;
