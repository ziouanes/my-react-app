import logo from './logo.svg';
import Banner from './components/Banner';
import Cart from './components/Cart';
import { useState } from 'react';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
      setCartItems([...cartItems, product]);
  };
  return (
   
    <div className="app">
               
               <div className="main-content">
                   <Banner />
                   {/* <ProductList /> */}
                   <Cart cartItems={cartItems} />
            <div className="main-content">
                <ProductList addToCart={addToCart} />
            </div>
               </div>
               
                   <Footer />
           </div>
   
  );
}

export default App;
