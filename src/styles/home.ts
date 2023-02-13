import { lighten } from 'polished';
import styled from 'styled-components';

export const HomeHero = styled.section`
  height: 25rem;
  background: #f4f8f3;
  background-image: url('/images/banner.png');
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
    margin: 2rem 0;
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

export const CallActionButton = styled.button`
  height: 3.2rem;
  border-radius: ${props => props.theme.defaultRadiusBorder};
  background: ${props => lighten(0.45, props.theme.colors.green)};
  border: 1px solid ${props => props.theme.colors.green};
  padding: 1.5rem 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => props.theme.colors.green};
  font-weight: normal;

  svg {
    width: 18px;
    height: 18px;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  transition: 0.2s;

  &:hover {
    color: white;
    background: ${props => lighten(0.1, props.theme.colors.linkHover)};
  }
`;
