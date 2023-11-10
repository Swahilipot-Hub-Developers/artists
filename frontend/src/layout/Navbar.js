// Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <Link href="/">
          <div className="logo">
            <img src="logo/logo.png" alt="" className="img-fluid" />
          </div>
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <Link href="/">
                <div className="nav-link scrollto">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/">
                <div className="nav-link scrollto active">Artists</div>
              </Link>
            </li>
            <li>
              <div className="nav-link scrollto" href="#" target="_blank">
                Upcoming Events
              </div>
            </li>
            <li>
              <div className="nav-link scrollto" href="#">
                Login
              </div>
            </li>
            <li>
              <div className="nav-link scrollto" href="#">
                Team
              </div>
            </li>
            <li className="dropdown getstarted">
              <div>
                <span>Take Action</span> <i className="bi bi-chevron-down"></i>
              </div>
              <ul>
                <li>
                  <Link href="/contact">
                    <div>Volunteer</div>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <div>Donate</div>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <div>Partner with Us</div>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
