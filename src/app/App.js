// import AppRoutes from './AppRoutes';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// function App() {
//   return (
//     <>
//     <Navbar />
//     <AppRoutes />
//     <Footer />
//     </>
//   );
// }

// export default App;

import React, { useState } from 'react';
import AppRoutes from './AppRoutes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);


  const updateCartCount = (count) => {
    setCartCount(count);
  };

  return (
    <>
      <Navbar cartCount={cartCount} />
      <AppRoutes cartCount={cartCount} updateCartCount={updateCartCount} />
      <Footer />
    </>
  );
}

export default App;
