import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductsPage from '../components/stripe/ProductsPage';
import AppRoutes from './AppRoutes';
import CartProvider from './CartProvider';

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <AppRoutes />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;


