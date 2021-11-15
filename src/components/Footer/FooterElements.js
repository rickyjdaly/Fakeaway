import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 12vh;
  color: #150f0f;
  background-color: #fdc500;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const FooterTitle = styled.h2`
  font-size: 1.5rem;
  letter-spacing: 3px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const FooterLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

export const FooterLogo = styled.i`
  font-size: 2rem;

  &:hover{
      color: #e31837;
      cursor: pointer;
  }
`;