import React from 'react';
import { FooterContainer, FooterLogo, FooterLogos, FooterTitle } from './FooterElements';

import {ImFacebook, ImTwitter, ImLinkedin} from 'react-icons/im';
import {FaInstagram} from 'react-icons/fa';

const Footer = () => {
    return ( 
        <FooterContainer>
            <FooterTitle>Fakeaway</FooterTitle>
            <FooterLogos>
                <FooterLogo><ImFacebook/></FooterLogo>
                <FooterLogo><ImTwitter/></FooterLogo>
                <FooterLogo><ImLinkedin/></FooterLogo>
                <FooterLogo><FaInstagram/></FooterLogo>
            </FooterLogos>
        </FooterContainer>

        );
}
 
export default Footer;