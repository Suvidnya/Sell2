import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appon from "./pages/profile/viewerprofile";
import Appy from "./pages/profile/editprofile";
import Profile from "./pages/profile/profile";
import App1 from "./pages/viewprofile/App";
//import Navbar from "./components/dashboard/navbar/Navbar";
import Home from "./components/dashboard/home/Home";
import Login from "./components/dashboard/Login";
//import Footer from "./components/dashboard/footer/Footer";
import AuthState from "./pages/dashboard/AuthState";
import React, { useEffect, useContext, useState } from 'react'
const host = "http://localhost:3000"
function App() {
  const [user, setuser] = useState(null)
   // const { getUser } = context
    useEffect(() => {
        const getUser = async () => {
            const url = `${host}/auth/getUser`
            const response = await fetch(url, {
                method: "GET",
                credentials: "include",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Credentials": true,
                },
            })
            const json = await response.json()
            console.log(json)
          }
        console.log("Iam ruuning")
        getUser()
    }, [])
  return (
    <AuthState>
    <Router>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        
        <Route path="/viewer" element={<Appon/>} />
        <Route path="/" element={<Profile/>} />
        <Route path="/discard" element={<Appy/>} />
        
      
      <Route path="/view" element={<App1/>} />
      
      </Routes>
    </Router>
    </AuthState>
  );
}

export default App;
