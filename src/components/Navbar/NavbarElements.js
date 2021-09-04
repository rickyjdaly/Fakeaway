import styled from "styled-components";
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 8vh;
  background: transparent;
  display: flex;
  justify-content: space-between;
  position: fixed;
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
  position: relative;
  display: flex;
  text-decoration: none;

  &:hover{
    color: #e9ba23;
  }
`;

export const OrderLabel = styled.div`
  color: #fff;
  background: #e31837;
  /* position: absolute; */
  font-size: 1rem;
  padding: 10px 20px;
  border-radius: 50%;


  
  list-style: none;
  
  
`;