import React from 'react'
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import TopProducts from './components/TopProducts/TopProducts';
import Vegetable from './components/Vegetable/Vegetable';
import Review_about from './components/Review/Review_about';
import App from './App';
import Footer from './components/Footer/Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);
  