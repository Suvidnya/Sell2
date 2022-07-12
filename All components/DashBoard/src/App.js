import Navbar from "./components/navbar/Navbar";
import './components/Body.css'
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import AuthState from "./context/AuthState";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./components/Login";
import React, { useEffect, useContext, useState } from 'react'
import Footer2 from "./components/Footer2/Footer2";
const host = "http://localhost:5000"


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
    <>
      <AuthState>
        <Router>
          <Navbar user={user}/>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />

          </Routes>

          <Footer2/>
        </Router>
      </AuthState>
    </>
  );
}

export default App;
