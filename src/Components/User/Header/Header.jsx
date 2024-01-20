import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import image from "../../../Images/Image.png";

function Header() {
  return (
    <div>
      <nav
        className="navbar fixed-top bg-primary navbar-expand-lg  "
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="navbar-brand">
            <img src={image} alt="" width="100%" height="30px" />
          </div>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/login">
                  Sign out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
