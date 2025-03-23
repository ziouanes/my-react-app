import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/global.css';
import App from './App';
 import reportWebVitals from './reportWebVitals';
// import Horloge from './Horloge';
import Appgame from './appgame';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Banner from './components/Banner';
import Cart from './components/Cart';
import Appgame2 from './appgame2';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Horloge /> */}
    <Appgame2 />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
