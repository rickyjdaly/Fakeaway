import styled from "styled-components";
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 8vh;
  background: transparent;
  display: flex;
  justify-content: space-between;
  position: absolute;
  align-items: center;
  padding: 0 3rem;
  box-sizing: border-box;
  
`;

export const NavbarLogo = styled.h1`
  font-size: 2rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: 400;

    &:hover{
      cursor: pointer;
    color: #e9ba23;
  }

`;

export const NavbarLink = styled(Link)`
  font-size: 2rem;
  color: #fff;
  

  &:hover{
    color: #e9ba23;
  }
`;