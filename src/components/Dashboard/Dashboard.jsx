import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Feature from '../Feature/Feature';


import Hero from '../Hero/Hero';


const Dashboard  = () => {
  return (
    <div>
         
   <Hero />
   <Feature />

    </div>
  
  )
}

export default Dashboard