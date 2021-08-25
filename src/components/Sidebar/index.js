import React from 'react';
import {VscChromeClose} from 'react-icons/vsc'
import { SidebarContainer, SidebarLinks, SidebarLink, SidebarClose } from './SidebarElements';

const Sidebar = ({show, toggle}) => {
    return ( 
        <SidebarContainer show={show}>
            <SidebarLinks>
                <SidebarClose onClick={toggle}><VscChromeClose/></SidebarClose>
                <SidebarLink>Home</SidebarLink>
            </SidebarLinks>
        </SidebarContainer>

     );
}
 
export default Sidebar;