import { lighten } from 'polished';
import Flag from 'react-world-flags';
import styled from 'styled-components';

interface FlagChecked{
  testando:boolean;
}

export const FlagCountry = styled.div<FlagChecked>`
    border: 3px solid #d1a212;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #d1a212;
    img{
    width: auto;
    height: 30px;
    object-fit: cover;
    opacity: ${props => props.testando ? 0.14 : 1};
    

    &:hover{
      ${props => props.testando ? `opacity:0.8` : `cursor: pointer;
      filter: brightness(1.4);`};
      
      }
    }

`


export const ChoiceButton = styled.div`
  width: 100%;
  position: absolute;
  top: 3px;
  display: flex;
  justify-content: center;

  .content-flag{
    width: 100px;
    display: flex;
    justify-content: center;
    gap: 2px;
    color: green;
    
  
  }

  

  
  
  @media only screen and (max-width: 768px) {
    }
`;
