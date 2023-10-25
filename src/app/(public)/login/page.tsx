"use client";

import React from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setCookie } from "cookies-next";
import { setIsAuthenticated, setRole } from "@/redux/slices/authSlice";
import { ECCOMMERCE_ROLE, ECCOMMERCE_TOKEN } from "@/constants";
import requist from "@/server";

const Login = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();

      const userData = {
        username: e.currentTarget.username.value,
        password: e.currentTarget.password.value,
      };
      const {
        data: { accesstoken, user },
      } = await requist.post("auth/login", userData);
      setCookie(ECCOMMERCE_TOKEN, accesstoken);
      setCookie(ECCOMMERCE_ROLE, user.role);

      dispatch(setIsAuthenticated(true));
      dispatch(setRole(user.role));
      
    } finally {
    }
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
