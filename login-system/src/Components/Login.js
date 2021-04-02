import React from 'react';
import {useState } from 'react';
import './Login.css';

const Login = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div className="login">
            <form className="login-form">
                <h1>LOGIN HERE!💻</h1>
                <input 
                    type="text" 
                    placeholder="Name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}>
                </input>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}>
                </input>
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
                <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
        </div>
    )
}

export default Login
