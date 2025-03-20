import logo from './logo.svg';
import Banner from './components/Banner';
import Cart from './components/Cart';
import { useState } from 'react';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';
import Testcode from './test';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Check if product already exists in cart
      const existingProduct = prevItems.find(item => item.id === product.id);
      
      if (existingProduct) {
        // If product exists, update its quantity
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      
      // If product doesn't exist, add it with quantity 1
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };
  return (
   
    <div className="app">
               
               <div >
                {/* <Testcode /> */}
                   <Banner />
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
