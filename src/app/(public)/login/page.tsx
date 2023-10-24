"use client";

import React from "react";

const Login = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <div className="container">
      <form className="mx-auto mt-5 w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="password"
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-light text-light">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
