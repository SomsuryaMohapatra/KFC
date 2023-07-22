import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            style={{ fontFamily: "Lumanosimo, cursive" }}
            className="navbar-brand fs-4"
            to="/"
          >
            KFC
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location === "/login" ? "active" : ""
                  }`}
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location === "/createuser" ? "active" : ""
                  }`}
                  to="/createuser"
                >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
