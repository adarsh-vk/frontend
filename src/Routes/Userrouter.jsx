import React from 'react'
import Homepage from '../Pages/Users/Homepage'
import {Route,Routes} from "react-router-dom"
import { Login }from '../Components/User/Login/Login'
import { Register } from '../Components/User/Register/Register'
import AdminHomepage from '../Pages/Admin/AdminHomepage'
import AdminLogin from '../Components/Admin/login/AdminLogin'
import CmpnyLogin from '../Components/Company/login/cmpnyLogin'
import SuLogin from '../Components/Security/login/suLogin'


function Userrouter() {
  return (
    <div>
        <Routes>
            <Route path="/home" element={<Homepage/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/admin' element={<AdminHomepage />}/>
            <Route path='/adminlogin' element= {<AdminLogin/>} />
            <Route path='/cmpnylogin' element={<CmpnyLogin/>} />
            <Route path='/sulogin' element={< SuLogin/>} />
        </Routes>
    </div>
  )
}

export default Userrouter