import React, {useState, useEffect} from 'react';
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

  const [total, setTotal] = useState();

  useEffect(() => {
    var total = 0;

    orders.map(m => (
      total = total + parseFloat(m.price)
    ))

      setTotal(total);
    // alert(total)

  }, [orders])

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

  const removeFromList = (e) => {
    
    setOrders(orders.filter(st => st.id !== e.target.id));

  }



  return ( 
    <Router>
      <GlobalStyle />
      <Navbar onClick={toggleSidebar} toggle={toggleSidebar} orderCount={orders.length}/>
      <Sidebar show={sidebar} toggle={toggleSidebar} list={orders} remove={removeFromList} orderCount={orders.length} total={parseFloat(total).toFixed(2)}/>
      
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