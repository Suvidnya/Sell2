import React,{useContext} from 'react'
import AuthConext from '../context/AuthContext'

const Login = () => {
  const context = useContext(AuthConext)
    const {login} = context
    const handleClick = ()=>{
      login()
    }
  return (
    <>
        <h1 style={{color:'white'}}>Login with outlook</h1>
            <button onClick={handleClick}>Login with outlook</button>


    </>
  )
}

export default Login