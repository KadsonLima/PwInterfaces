import { shade } from 'polished';
import styled from 'styled-components';

export const FooterContainer = styled.header`
width: 100%;
z-index: 1;
left: 0;
bottom: 0;
  height: 3rem;
  background: ${props => props.theme.colors.background};
  border-top: 2px solid gray;

  margin-bottom: 0 auto;

  font-size: 0.9rem;
  color: ${props => shade(0.2, props.theme.colors.primary)};
`;

export const FooterContent = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  button {
    margin-left: auto;
  }
`;

export const Nav = styled.nav`
  margin-left: 5rem;
  height: 5rem;
  a {
    display: inline-block;
    position: relative;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: ${props => props.theme.colors.link};

    transition: color 0.2s;

    & + a {
      margin-left: 2rem;
    }

    &:hover {
      color: ${props => props.theme.colors.linkHover};
    }
    &.active {
      font-weight: bold;
      color: ${props => props.theme.colors.linkHover};
    }
    &.active::after {
      content: '';
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background: ${props => props.theme.colors.linkHover};
    }
  }
`;
