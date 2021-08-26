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

  const [orders, setOrders] = useState([]);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  }

  const addToOrder = (data) => {
    console.log(data);

    setOrders(prev => (
      [
        ...prev,
        data
      ]
    ))
  }

  return ( 
    <Router>
      <GlobalStyle />
      <Navbar onClick={toggleSidebar} toggle={toggleSidebar}/>
      <Sidebar show={sidebar} toggle={toggleSidebar} list={orders}/>
      
      <Hero />
      <Menu add={addToOrder} title='Premium Burgers' data={BurgerMenu}/>
      <Menu add={addToOrder} title='Top Tier Pizza' data={PizzaMenu}/>
      <Menu add={addToOrder} title='Clucking awesome Chicken' data={ChickenMenu}/>
      <Menu add={addToOrder} title='Familiar Favourites' data={OtherMenu}/>
      <Menu add={addToOrder} title='Killer Kebabs' data={KebabMenu}/>
      <Menu add={addToOrder} title='Famous Fries' data={FriesMenu}/>
      <Menu add={addToOrder} title='Something Sweet' data={DessertMenu}/>

      <Footer />
    </Router>
    
   );
}
 
export default App;