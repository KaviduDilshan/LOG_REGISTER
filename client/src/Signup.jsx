import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function Signup() {
  const [name,setName] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5173/register',{name,email,password})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-4 rounded shadow w-25">
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Fied */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
              onChange={(e) => set(e.target.value)}
            />
          </div>

          {/* Register Button */}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>
          </form>

          {/* Redirect to Login */}
          <p className="text-center mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">
              Login here
            </a>
          </p>
        
      </div>
    </div>
  );
}

export default Signup;
