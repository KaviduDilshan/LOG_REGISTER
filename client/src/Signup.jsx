import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !email || !password) {
      setErrorMessage("All fields are required.");
      return;
    }

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result.data);
        navigate("/login"); // Navigate to login page
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("An error occurred. Please try again.");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="bg-white p-4 rounded shadow w-25 ">
        <h2 className="text-center mb-4">Register</h2>

        {/* Error Message */}
        {errorMessage && (
          <div className="alert alert-danger text-center" role="alert">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
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
              onChange={(e) => setPassword(e.target.value)}
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
