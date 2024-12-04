/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contextData } from "../Contex";

const LoginPage = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // Handle form submit



const {loginUser}=useContext(contextData)

  const loginHandle = (e) => {
    e.preventDefault();
    const email=e.target.email.value
    const password=e.target.password.value
    // console.log(email, password);
     loginUser(email,password)


  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-white">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back!
        </h1>
        



        <form onSubmit={loginHandle}>
          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-lg font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-4 bg-gray-50 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-lg font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-4 bg-gray-50 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-6">
            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full p-4 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
