import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import RetailProd from './components/Product/RetailProd';
import Home from './Page/Home';
import WholeProd from './components/Product/WholeProd';
import TopProducts from './components/TopProducts/TopProducts';
import Vegetable from './components/Vegetable/Vegetable';
import WholeSale from './components/Farmers_prod/WholeSale'
import Cart from './components/Cart/Cart';

import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/Footer/Footer';
import Farmer from './components/Farmers_prod/Farmer'
import Retailor from './components/Farmers_prod/Retailor'
import Feature from './components/Feature/Feature'
import Wishlist from './components/Wishlist/Wishlist'
import ProceedCheckOut from './components/ProceedCheckOut/ProceedCheckOut'
import OrderHistory from './components/OrderHistory/OrderHistory'
import AccountDetail from './components/AccountDetail/AccountDetail'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Review_about from './components/Review/Review_about';
import Rev from './components/Review/Rev';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/topproducts" element={<TopProducts />} />

        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/farmer" element={<Farmer />} />
        
        <Route path="/Cart" element={<Cart />} />
        <Route path="/vegetable" element={<Vegetable />} />
        
        <Route path="/WholeSale" element={<WholeSale />} />
        <Route path="/WholeProd/:id" element={<WholeProd />} />
        <Route path="/Review" element={<Review_about />} />
        <Route path="/Rev" element={<Rev />} />
        <Route path="/Retailor" element={<Retailor />} />
        <Route path="/RetailProd/:id" element={<RetailProd />} />
        <Route path="/Dashboard" element={<Dashboard/>} />
        <Route path="/OrderHistory" element={<OrderHistory />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path ="/ProceedCheckOut" element ={<ProceedCheckOut/>}/>
        
        <Route path="/AccountDetail" element={<AccountDetail/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
