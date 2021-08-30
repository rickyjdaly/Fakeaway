import React from 'react';
import {CgShoppingCart} from 'react-icons/cg'
import { NavbarContainer, NavbarLink, NavbarLinkCounter, NavbarLogo } from './NavbarElements';

const Navbar = ({toggle}) => {
    return ( 
        <NavbarContainer>
            <NavbarLogo>
                Fakeaway
            </NavbarLogo>
            <NavbarLink>
                <CgShoppingCart onClick={toggle}/>
                
            </NavbarLink>
        </NavbarContainer>
     );
}
 
export default Navbar;