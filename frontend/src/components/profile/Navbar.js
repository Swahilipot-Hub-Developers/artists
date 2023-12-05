import React, { useState } from "react";
import Link from "next/link";

const Customnavbar = () => {
  const [activeLink, setActiveLink] = useState("Home");

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="header">
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
                href="#hero"
                onClick={() => setActiveLink("Artists")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === "About" ? "active" : ""}`}
                href="#portfolio"
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
                href="#skills"
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
                href="#contact"
                onClick={() => setActiveLink("Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div style={{ position: "relative" }}>
          <img
            src="profile-picture.jpg"
            alt="Avatar"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          />
          <span
            onClick={toggleDropdown}
            style={{
              cursor: "pointer",
              marginRight: "10px",
              fontWeight: "bold",
            }}
          >
            John Doe
          </span>
          {showDropdown && (
            <ul
              className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
              style={{
                position: "absolute",
                top: "100%",
                right: 0,
                backgroundColor: "#333",
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                zIndex: 1000,
              }}
            >
              <li
                className="dropdown-header"
                style={{ marginBottom: "10px", textAlign: "center" }}
              >
                <h6>Kevin Anderson</h6>
                <span>Web Designer</span>
                <hr style={{ color: "white" }}></hr>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  className="d-flex"
                  href="/form"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#008060";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#fff";
                  }}
                >
                  <i
                    className="bi bi-person"
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  ></i>
                  <span>Edit Profile</span>
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  className="d-flex"
                  href="users-profile.html"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#008060";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#fff";
                  }}
                >
                  <i
                    className="bi bi-gear"
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  ></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li style={{ marginBottom: "10px" }}>
                <a
                  className="d-flex"
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = "#008060";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = "#fff";
                  }}
                >
                  <i
                    className="bi bi-box-arrow-right"
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  ></i>
                  <span>Sign Out</span>
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Customnavbar;
