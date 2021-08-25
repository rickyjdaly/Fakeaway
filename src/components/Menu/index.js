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

const Menu = ({ title, data }) => {
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
                <MenuButton>{menu.button}</MenuButton>
                </MenuInfo>
            </MenuCard>
            );
        })}

      </MenuWrapper>
     
    </MenuContainer>
  );
};

export default Menu;
