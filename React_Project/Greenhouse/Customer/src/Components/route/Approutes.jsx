import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Home from '../Home'; 
import Customer from '../Customer'; 

export const Approutes = () => {
  return (
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/customer" element={<Customer />} /> 
    </Routes>
  );
};
