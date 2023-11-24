import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>SwahiliPot</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
        Designed by <a href="https://www.swahilipothub.co.ke/">SwahiliPot</a>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
