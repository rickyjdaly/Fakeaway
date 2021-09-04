import React from "react";
import { VscChromeClose } from "react-icons/vsc";
import {
  SidebarContainer,
  SidebarLinks,
  SidebarLink,
  SidebarClose,
  SidebarList,
  SidebarItem,
  SidebarName,
  SidebarPrice,
  SidebarDetails,
  SidebarDelete,
  SidebarOrder,
  SidebarOrderButton,
  SidebarOrderPrice,
  SidebarOrderCount,
  SidebarOrderNumber,
} from "./SidebarElements";
import { RiDeleteBin4Line } from "react-icons/ri";

const Sidebar = ({ show, toggle, list, remove, total, orderCount }) => {
  return (
    <SidebarContainer show={show}>
      <SidebarClose onClick={toggle}>
        <VscChromeClose />
      </SidebarClose>
      <SidebarOrderCount>
        <SidebarOrderNumber>
            {orderCount}
        </SidebarOrderNumber> 
        items
      </SidebarOrderCount>
      <SidebarList>
        {list.map((m) => (
          <SidebarItem>
            <SidebarDetails key={m.id}>
              <SidebarName>{m.name}</SidebarName>
              <SidebarPrice>{m.price}</SidebarPrice>
            </SidebarDetails>
            <SidebarDelete>
              <RiDeleteBin4Line id={m.id} onClick={remove} />
            </SidebarDelete>
          </SidebarItem>
        ))}

        <SidebarOrder>
          <SidebarOrderPrice>€{total}</SidebarOrderPrice>
          <SidebarOrderButton>Pay Now</SidebarOrderButton>
        </SidebarOrder>
      </SidebarList>
    </SidebarContainer>
  );
};

export default Sidebar;
