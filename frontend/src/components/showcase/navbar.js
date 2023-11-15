// Navbar.js

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header d-flex align-items-center fixed-top" id="header">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <Link href="/" className="logo d-flex align-items-center me-auto me-lg-0">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.png" alt="" /> */}
          <i className="bi bi-camera"></i>
          <h1>PhotoFolio</h1>
        </Link>

        <nav id="navbar" className="navbar">
          <ul>
            <li className="dropdown">
              <Link href="/">
                <div className="nav-link scrollto">Home</div>
                <span>
                  Gallery
                </span>
                <i class="bi bi-chevron-down dropdown-indicator"></i>

              </Link>
            </li>
          </ul>

        </nav>

      </div>

    </header>
  );
};

export default Navbar;
