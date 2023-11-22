import React, { useState } from "react";
import Link from "next/link";

const Customnavbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Artist Profile
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === "Home" ? "active" : ""}`}
                href="#"
                onClick={() => setActiveLink("Home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeLink === "Artists" ? "active" : ""
                }`}
                href="#"
                onClick={() => setActiveLink("Artists")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === "About" ? "active" : ""}`}
                href="#"
                onClick={() => setActiveLink("About")}
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeLink === "SKills & Talents" ? "active" : ""
                }`}
                href="#"
                onClick={() => setActiveLink("Skills & Talents")}
              >
                Skills & Talents
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${
                  activeLink === "Contact" ? "active" : ""
                }`}
                href="#"
                onClick={() => setActiveLink("Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-left">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="profile-picture.jpg"
            alt="User"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          />
          <span style={{ fontWeight: "bold" }}>John Doe</span>
        </div>
      </div>
    </nav>
  );
};

export default Customnavbar;
