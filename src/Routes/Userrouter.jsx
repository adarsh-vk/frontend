import React from "react";
import Homepage from "../Pages/Users/Homepage";
import { Route, Routes } from "react-router-dom";
import { Login } from "../Components/User/Login/Login";
import { Register } from "../Components/User/Register/Register";
import AdminHomepage from "../Pages/Admin/AdminHomepage";
import AdminLogin from "../Components/Admin/login/AdminLogin";
import CmpnyLogin from "../Components/Company/login/CmpnyLogin";
import SuLogin from "../Components/Security/login/SuLogin";
import CmpnyHomepage from "../Pages/Company/CmpnyHomepage";
import SuHomepage from "../Pages/Security/SuHomepage";
import Successful from "../Components/User/Sucessful/Successful";


function Userrouter() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminHomepage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/cmpnylogin" element={<CmpnyLogin />} />
        <Route path="/sulogin" element={<SuLogin />} />
        <Route path="/cmpny" element={<CmpnyHomepage/>} />
        <Route path="/security" element={<SuHomepage/>} />
        <Route path="/success" element={<Successful/>} />
      </Routes>
    </div>
  );
}

export default Userrouter;
