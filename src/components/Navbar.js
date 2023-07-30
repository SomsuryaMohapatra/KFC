import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate=useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  const handleLogin = ()=>{
    navigate("/login");
  }
  const handleSignup = ()=>{
    navigate("/createuser");
  }
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
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link
                  className={`nav-link ${location === "/" ? "active" : ""}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {localStorage.getItem("authToken") && (
                <li className="nav-item">
                  <Link
                    className={`nav-link ${location === "/" ? "active" : ""}`}
                    aria-current="page"
                    to="/"
                  >
                    My Orders
                  </Link>
                </li>
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <button className="btn btn-info mx-2 text-white" onClick={handleLogin}>Login</button>

                <button className="btn btn-danger mx-2 text-white" onClick={handleSignup}>
                  Signup
                </button>
              </div>
            ) : (
              <div className="d-flex">
                <button className="btn btn-danger mx-2 text-white" >
                  My Cart
                </button>
                <button className="btn btn-danger mx-2 text-white" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
