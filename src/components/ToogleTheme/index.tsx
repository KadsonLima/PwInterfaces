import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import styled from "styled-components";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ToogleTheme = ({ theme, setTheme }: any) => {
  const toggleTheme = () => {
    if (theme === light) {
      setTheme(dark);
    } else {
      setTheme(light);
    }
  };

  return (
    <ToogleButton
      onClick={() => {
        toggleTheme();
      }}


    >
      {theme === light ? <MdDarkMode/> : <MdLightMode/>}
    </ToogleButton>
  );
};

export const ToogleButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 2;

  border: 2px solid ${props => props.theme.colors.text};

  display: flex;
  justify-content: center;
  align-items: center;
  
    svg{
        width: 60%;
        height: auto;
        color:   ${props => props.theme.colors.text};
    }
  background-color: ${props => props.theme.colors.background};
`;
