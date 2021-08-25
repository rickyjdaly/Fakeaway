import React from 'react';
import { HeroContainer, HeroContent, HeroH1, HeroP,HeroBtn, HeroItems } from './HeroElements';

const Hero = () => {
    return ( 
        <HeroContainer>
            <HeroContent>
        <HeroItems>
          <HeroH1>Simply the Best</HeroH1>
          <HeroP>Takeaway in town</HeroP>
          <HeroBtn>See Menu</HeroBtn>
        </HeroItems>
      </HeroContent>

        </HeroContainer>
     );
}
 
export default Hero;