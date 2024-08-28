import React from 'react'
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import TopProducts from './Components/TopProducts/TopProducts';
import Vegetable from './Components/Vegetable/Vegetable';
import Review_about from './Components/Review/Review_about';
import App from './App';
import Footer from './Components/Footer/Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
  