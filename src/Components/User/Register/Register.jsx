import React from "react";
import "../Login/Login.css";
import {Link} from "react-router-dom"
import image from "../../../Images/Login-logo.png"

export const Register = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="logo">
          <img src={image} alt="logo" />
        </div>
        <div class="text-center mt-4 name">Parkease</div>
        <form class="p-3 mt-3">
          <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-mobile"></span>
            <input
              type="text"
              name="Phone"
              id="phone"
              placeholder="Phone number"
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
            />
          </div>
          <button class="btn mt-3">Register</button>
        </form>
        <div class="text-center fs-6">
          Are you a registered User?<br /> <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};
