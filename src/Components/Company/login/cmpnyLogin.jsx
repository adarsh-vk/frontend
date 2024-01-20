import React from 'react'
import './Login.css';
import image from "../../../Images/Login-logo.png"
import { useFormik } from "formik";
import * as Yup from "yup";


function CmpnyLogin() {
  
  function click() {
    // toggle the type attribute
    const togglePassword = document.querySelector("#togglePassword");
    const passwordV = document.querySelector("#password");
    const type =
      passwordV.getAttribute("type") === "password" ? "text" : "password";
    togglePassword.classNameName === "fa fa-eye viewpass mr-4 text-muted"
      ? (document.getElementById("togglePassword").classNameName =
          "fa fa-eye-slash viewpass mr-4 text-muted")
      : (document.getElementById("togglePassword").classNameName =
          "fa fa-eye viewpass mr-4 text-muted");
    passwordV.setAttribute("type", type);
  }

  
  const initialValues = {
    phone: "",
    password: "",
  };

  const onSubmit = (values) => {};

  const validationSchema = Yup.object({
  
    phone: Yup.string()
      .required("phone number is required")
      .matches(/^\d+$/, "Phone number must contain only numbers")
      .min(10, "Phone number must be at least 10 characters"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),
    
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <div>
      <div className="wrapper">
        <div className="logo">
          <img src={image} alt="logo" />
        </div>
        <div className="text-center mt-4 name">Parkease</div>
        <form className="p-3 mt-3" onSubmit={formik.handleSubmit}>
         
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-mobile"></span>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
          </div>
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
             <i
              className="fa fa-eye viewpass mr-4 text-muted"
              onClick={click}
              id="togglePassword"
            ></i>
          </div>
          {formik.touched.password && formik.errors.password ? (
            <div className="error">{formik.errors.password}</div>
          ) : null}
          
          <button className="btn mt-3" type="submit">
           Log in
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default CmpnyLogin