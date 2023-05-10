import { useState } from 'react';
import AppRoutes from './AppRoutes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <AppRoutes setCartCount={setCartCount} />
      <Footer />
    </>
  );
}

export default App;

