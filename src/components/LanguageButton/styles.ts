import styled from "styled-components";

interface FlagChecked {
  testando: boolean;
}

export const FlagCountry = styled.div<FlagChecked>`
    border: 3px solid ${props => props.theme.colors.border};
    display: flex;
    justify-content: center;
    align-items: center;
    img{
    width: 15px;
    height: auto;
    object-fit: contain;
    opacity: ${(props) => (props.testando ? 0.54 : 1)};
    

    &:hover{
      ${(props) =>
        props.testando
          ? `opacity:0.8`
          : `cursor: pointer;
      filter: brightness(1.4);`};
      
      }
    }

`;

export const ChoiceButton = styled.div`
  position: absolute;
  z-index: 3;
  top: 3px;
  left: center;
  display: flex;
  justify-content: center;
   align-items: center;
   border-radius: 5px;
   border: 2px solid ${props => props.theme.colors.text};
  padding: 2px;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  .content-flag {
    width: 100px;
    display: flex;
    justify-content: center;
    color: green;
  }

  @media only screen and (max-width: 768px) {
    img{
      visibility: visible;
    }
  }
`;
