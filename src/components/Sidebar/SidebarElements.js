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
  align-items: center;
  position: absolute;
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

export const SidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const SidebarLink = styled.li`
  list-style: none;
`;
