import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';

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


