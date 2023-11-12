import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>

     <Navbar />
      <main id="content" role="main">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
