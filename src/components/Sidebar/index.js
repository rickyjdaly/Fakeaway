import React from 'react';
import {VscChromeClose} from 'react-icons/vsc'
import { SidebarContainer, SidebarLinks, SidebarLink, SidebarClose, SidebarList, SidebarItem, SidebarName, SidebarPrice, SidebarDetails, SidebarDelete, SidebarOrder, SidebarOrderButton, SidebarOrderPrice } from './SidebarElements';
import {RiDeleteBin4Line} from 'react-icons/ri';


const Sidebar = ({show, toggle, list}) => {
    return ( 
        <SidebarContainer show={show}>
            
                <SidebarClose onClick={toggle}><VscChromeClose/></SidebarClose>
                <SidebarList>
                {list.map(m => (
                    <SidebarItem>
                        <SidebarDetails key={m.id}>
                            <SidebarName>{m.name}</SidebarName>
                            <SidebarPrice>{m.price}</SidebarPrice>
                        </SidebarDetails>
                        <SidebarDelete>
                            <RiDeleteBin4Line/>
                        </SidebarDelete>                        
                        
                        
                    </SidebarItem>
                ))}
                
                    <SidebarOrder>
                        <SidebarOrderPrice>€34.99</SidebarOrderPrice>
                        <SidebarOrderButton>Pay Now</SidebarOrderButton>
                    </SidebarOrder>

                </SidebarList>
                
               
        </SidebarContainer>

     );
}
 
export default Sidebar;