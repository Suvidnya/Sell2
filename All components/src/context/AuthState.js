import AuthContext from './AuthContext'
import { useState } from 'react'

const host = "http://localhost:5000"


const AuthState = (props) => {
    const [user, setUser] = useState(null)
    const url = `${host}/auth/outlook`
    const login = () => {
        window.open(url, "_self");
    }

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
        return json
    }

    return (
        <AuthContext.Provider value={{ user, setUser, getUser, login }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState