import styled from 'styled-components';

export const PricingContainer = styled.section`
  max-width: 1120px;
  margin: 0 auto;
  padding: 4rem 2rem;
  gap: 30px;
  text-align: center;
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;

  p:first-child {
    font-size: 1.4rem;
    font-weight: bold;
    color: ${props => props.theme.colors.green};
  }

  p:nth-child(2) {
    font-size: 12px;
    color: ${props => props.theme.colors.secundary};
    margin: 0.7rem 0;
  }

  h3:first-child {
    font-size: 2.4rem;
    font-weight: bold;
    color: ${props => props.theme.colors.text};
  }

  .second-session {
    margin: 1rem 0 0 0;
    padding: 1rem 0;
    border-top: 1px solid ${props => props.theme.colors.border};

    font-size: 1rem;
    font-weight: bold;
    text-align: left;
  }
  ul li {
    text-align: left;
    padding: 0.3rem 0;
    display: flex;
    align-items: center;

    svg:first-child {
      font-size: 20px;
      color: ${props => props.theme.colors.blue};
    }

    span {
      margin: 0 0 0 0.5rem;
    }
  }
  
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top: 5px solid #e5e5e5;

  .planos{
    width: 100%;
    height: 400px;
    background-image: url('/images/planos.png');
    background-repeat:no-repeat;
    background-size: cover;
    border-bottom: 5px solid #e5e5e5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.5rem;
    font-family: Poppins,sans-serif;
    text-transform: uppercase;
    color: #e5e5e5;
    text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000;
  }
`

export const CardPlan = styled.article`
  width: 20rem;
  height: 25rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 18px;
  padding: 1rem 1.5rem;
  background-color: rgb(255 255 255 / 10%);
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 6%);

  ul li {
    list-style: none;
  }
`;
