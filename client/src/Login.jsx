import React from 'react'
import { useState } from "react";
import axios from 'axios'
import {useNavigate} from "react-router-dom"

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post('http://localhost:3001/login',{email,password})
    .then(result => {console.log(result)
      if(result.data === "success"){
        navigate ('/home')
      }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="bg-white p-4 rounded shadow w-25 ">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
          </form>

          {/* Redirect to register */}
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <a href="/register" className="text-decoration-none">
              Register
            </a>
          </p>
        
      </div>
    </div>
  );
}

export default Login;
