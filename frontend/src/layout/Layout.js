// layout/Layout.js

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, includeNavbar = true, includeFooter = true }) => {
  return (
    <div>
      {includeNavbar && <Navbar />}
      {children}
      {includeFooter && <Footer />}
    </div>
  );
};

export default Layout;
