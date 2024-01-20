import React from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
import image from "../../../Images/Login-logo.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../../Services/userApi";

export const Register = () => {
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
    userName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = async(values) => {
    console.log(values);
    const {data}=await register(values);
    console.log(data);
  };

  const validationSchema = Yup.object({
    userName: Yup.string()
      .required("A name is required")
      .min(3, "Name must be at least 3 characters"),
    phone: Yup.string()
      .required("phone number")
      .matches(/^\d+$/, "Phone number must contain only numbers")
      .min(10, "Phone number must be at least 10 characters"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Please confirm your password"),
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
            <span className="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
              placeholder="Username"
            />
          </div>
          {formik.touched.userName && formik.errors.userName ? (
            <div className="error">{formik.errors.userName}</div>
          ) : null}
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
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="text"
              name="confirmPassword"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className="error">{formik.errors.confirmPassword}</div>
          ) : null}
          <button className="btn mt-3" type="submit">
            Register
          </button>
        </form>

        <div className="text-center fs-6">
          Are you a registered User?
          <br /> <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};
