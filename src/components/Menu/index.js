import React from "react";
import {
  MenuButton,
  MenuCard,
  MenuContainer,
  MenuDesc,
  MenuHeading,
  MenuImage,
  MenuInfo,
  MenuPrice,
  MenuTitle,
  MenuWrapper,

} from "./MenuElements";

import uuid from 'uuid-v4';

const Menu = ({ title, data, add }) => {

    const addToOrder = (e) => {
        const orderItem = {
            id: uuid(),
            name: e.target.name,
            price: e.target.value
        }
        add(orderItem);
    }

  return (
    <MenuContainer>
      <MenuHeading>{title}</MenuHeading>
      <MenuWrapper>
        {data.map((menu, index) => {
            return (
            <MenuCard key={index}>
                <MenuImage src={menu.img} alt={menu.alt} />
                <MenuInfo>
                <MenuTitle>{menu.name}</MenuTitle>
                <MenuDesc>{menu.desc}</MenuDesc>
                <MenuPrice>{menu.price}</MenuPrice>
                <MenuButton value={menu.price} name={menu.name} onClick={addToOrder}>{menu.button}</MenuButton>
                </MenuInfo>
            </MenuCard>
            );
        })}

      </MenuWrapper>
     
    </MenuContainer>
  );
};

export default Menu;
