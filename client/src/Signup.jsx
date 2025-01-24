import { useState } from "react";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-4 rounded shadow w-25">
        <h2 className="text-center mb-4">Register</h2>
        <form>
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
            />
          </div>

          {/* Register Button */}
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Register
          </button>

          {/* Redirect to Login */}
          <p className="text-center mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-decoration-none">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
