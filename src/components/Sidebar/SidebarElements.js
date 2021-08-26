import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  width: 350px;
  height: 100%;
  z-index: 9;
  background-color: #ffc500;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  right: 0;
  border-left: 3px solid #e31837;
`;

export const SidebarClose = styled.i`
  position: absolute;
  top: 30px;
  right: 20px;
  color: #fff;
  z-index: 32;
  font-size: 32px;

  &:hover{
      cursor: pointer;
  }

`;

export const SidebarList = styled.ul`
  list-style: none;
  width: 100%;
  max-height: 60%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  padding-top: 30px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 5px grey;  */
  background-color: transparent;
  border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 10px;
}

&::-webkit-scrollbar-thumb:hover {
  background: #e31837; 
}

`;


export const SidebarItem = styled.li`
  color: red;
  border-bottom:3px solid #e31837;
  border-right:3px solid #e31837;
  border-top:1px solid #e31837;
  border-left:1px solid #e31837;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 80%;
  margin-top: 1rem;
  z-index: 400;
`;

export const SidebarDetails = styled.div`
  flex: 0 0 90%;
  /* background: green; */
`;


export const SidebarDelete = styled.div`
  flex: 0 0 10%;
  /* background: pink; */

  &:hover{
    cursor: pointer;
    transform: scale(1.4);
  }
`;

export const SidebarName = styled.p`
    color: #fff;
    font-size: 1.5rem;
    text-align: center;
`;

export const SidebarPrice = styled.p`
    color: #999;
    font-size: 1rem;
    text-align: center;
`;

export const SidebarOrder = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20vh;
  /* background: #e31837; */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;


export const SidebarOrderPrice = styled.h1`
  color: #fff;
  font-size: 3rem;
`;



export const SidebarOrderButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;


  &:hover{
      background: #fff;
      transition: 0.2s ease-out;
      cursor: pointer;
      color: #000;
  }
`;

