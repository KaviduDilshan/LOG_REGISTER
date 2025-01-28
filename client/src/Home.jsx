import React from "react";

function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light vh-100">
      <div className="bg-white p-4 rounded shadow w-25 text-center">
        <h1 className="mb-4 text-center">Welcome to the Home Page!</h1>
        <p className="text-secondary">
          You have successfully logged in. Explore the application, manage your tasks, or navigate to other sections.
        </p>
        <button className="btn btn-primary mt-4 px-4 py-2">
          Explore Features
        </button>

        {/* Redirect to register */}
          <p className="text-center mt-3">
            Ready to leave?{" "}
            <a href="/login" className="text-decoration-none">
              Logout
            </a>
          </p>

      </div>
    </div>
  );
}

export default Home;
