import React from 'react';
import {CgShoppingCart} from 'react-icons/cg'
import { NavbarContainer, NavbarLink, NavbarLinkCounter, NavbarLogo, OrderLabel } from './NavbarElements';

const Navbar = ({toggle, orderCount}) => {
    return ( 
        <NavbarContainer>
            <NavbarLogo>
                Fakeaway
            </NavbarLogo>
            <NavbarLink>
                <CgShoppingCart onClick={toggle}/>
                <OrderLabel>{orderCount}</OrderLabel>
            </NavbarLink>
        </NavbarContainer>
     );
}
 
export default Navbar;