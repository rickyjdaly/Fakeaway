import React, {useState} from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyles';
import Hero from './components/Hero';
import Sidebar from './components/Sidebar';
import Menu from './components/Menu';
import {BurgerMenu, PizzaMenu, ChickenMenu, OtherMenu, KebabMenu, FriesMenu, DessertMenu} from './MenuList';
import Footer from './components/Footer';

const App = () => {

  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  return ( 
    <Router>
      <GlobalStyle />
      <Navbar onClick={toggleSidebar} toggle={toggleSidebar}/>
      <Sidebar show={sidebar} toggle={toggleSidebar}/>
      
      <Hero />
      <Menu title='Premium Burgers' data={BurgerMenu}/>
      <Menu title='Top Tier Pizza' data={PizzaMenu}/>
      <Menu title='Clucking awesome Chicken' data={ChickenMenu}/>
      <Menu title='Familiar Favourites' data={OtherMenu}/>
      <Menu title='Killer Kebabs' data={KebabMenu}/>
      <Menu title='Famous Fries' data={FriesMenu}/>
      <Menu title='Something Sweet' data={DessertMenu}/>

      <Footer />
    </Router>
    
   );
}
 
export default App;