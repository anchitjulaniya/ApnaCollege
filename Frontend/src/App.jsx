import { Outlet, useLocation } from 'react-router';
import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  const location = useLocation();
  
  const noHeaderFooter = ["/login", "/signup"];

  const hideHeaderFooter = noHeaderFooter.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Outlet />
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
