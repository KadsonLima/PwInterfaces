import styled from "styled-components";

export const Container = styled.div`
position: fixed;
left: 0;
top: 0;
bottom: 0;
z-index: 4;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.719);
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  div {
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }

  .obs {
    flex-direction: column;

    textarea {
      width: 80%;
      border-radius: 10px;
      height: 80px;
      padding: 10px;
    }
  }

  .info {
    column-gap: 30px;
    label {
      width: 70px;
      font-size: 15px;
    }
  }

  .service {
    gap: 10px;
    div{
      display: flex;
      gap: 20px;
    }
    label {
      min-width: 145px;
      min-height: 48px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        cursor: pointer;
        padding: 3px 10px;
        border-radius: 6px;
    flex-direction: column;
    }
  }
    .buttons {
    display: flex;
    justify-content: center;
    gap: 30px;
    width: 100%;
    button{
    width: 100%;
    margin: 0;

    }
    @media only screen and (max-width: 768px) {
    button{
      max-width: 120px;
      
    }

  } 
  
  }
`;

export const Modal = styled.div`
  position: fixed;
  max-width: 775px;
  margin-left: auto;
  margin-right: auto;
  overflow-y: scroll;
  left: 0;
  right: 0;
  top: 10px;
  bottom: 10px;
  background-color: ${(props) => props.theme.colors.background};
  z-index: 4;
  border-radius: 15px;
  border: 2px solid #9999;
  padding: 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  

  
  @media only screen and (max-width: 768px) {
    top: 0;
  bottom: 0;  
  height: 100hv;
  border-radius: 0%;
  border: none;

  } 

     
  h3, h1{
    color: rgb(250, 163, 7);
    font-weight: 700;
    font-family: "Gill Sans", sans-serif;
    }

`;

export const CloseButton = styled.button`
  max-width: 250px;
  border-radius: 10px;
  background-color: #e53238;
  border: 2px solid #f2f2f2f2;
  font-weight: 900;
  color: #f2f2f2f2;

  &:hover {
    background-color: #942112;
  }
`;
export const SendButton = styled.button`
  max-width: 250px;
  border-radius: 10px;
  background-color: #16dd16;
  border: 2px solid #f2f2f2f2;
  font-weight: 900;
  color: #f2f2f2f2;

  &:hover {
    background-color: #129412;
  }
`;
