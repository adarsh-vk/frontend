import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import image from "../../../Images/Image.png"

function Header() {
  return (
    <div>
      <nav class="navbar fixed-top bg-primary navbar-expand-lg  " data-bs-theme="dark">
        <div class="container-fluid">
        <div class="navbar-brand" >
      <img src={image} alt="" width="100%" height="30px" />
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto" >
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/login">Sign out</Link>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Header