import styled from "styled-components";

export const ModalBackdrop = styled.div`
  
  background: rgba(0,0,0,0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  border-radius: 16px;
  
  /* min-width: 350px; */
  /* min-height: 80%; */
  transform: translate(-50%, -50%);
  background: #fff;
  color: #000;
  border: 2px solid red;
  padding: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  

  z-index: 1000;
`;

export const ModalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  color: #e31837;
`;

export const ModalClose = styled.i`
  position: absolute;
  top: 30px;
  right: 20px;
  color: #e31837;
  z-index: 1320;
  font-size: 32px;

  &:hover{
      cursor: pointer;
  }

`;

export const ModalButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  margin-top: 2rem;


  &:hover{
      background: #ffc500;
      transition: 0.2s ease-out;
      cursor: pointer;
      color: #000;
  }
`;

export const ModalPrice = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  color: #e31837;
  text-align: center;
  margin-top: 2rem ;
`;

export const ModalIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15rem;
  color: #ffc500;
  

  
`;