import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { contextData } from "../Contex";

const RegisterPage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [photoUrl, setPhotoUrl] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordError, setPasswordError] = useState("");
//   const [isFormValid, setIsFormValid] = useState(true);

//   // Handle password validation
//   const validatePassword = (password) => {
//     const upperCase = /[A-Z]/;
//     const lowerCase = /[a-z]/;
//     const minLength = 6;

//     if (!upperCase.test(password)) {
//       setPasswordError("Password must contain at least one uppercase letter.");
//       setIsFormValid(false);
//     } else if (!lowerCase.test(password)) {
//       setPasswordError("Password must contain at least one lowercase letter.");
//       setIsFormValid(false);
//     } else if (password.length < minLength) {
//       setPasswordError("Password must be at least 6 characters long.");
//       setIsFormValid(false);
//     } else {
//       setPasswordError("");
//       setIsFormValid(true);
//     }
//   };

  // Handle form submit

    const {createNewUser,userData}=useContext(contextData)
    const navigate=useNavigate()
    if(userData){
      navigate('/')
    }

  const registerHandle = (e) => {
    e.preventDefault();
    const name=e.target.name.value
    const email=e.target.email.value
    const password=e.target.password.value
    const photoUrl=e.target.photoUrl.value
    // console.log(name,email,photoUrl,password)
    createNewUser(name,email,password,photoUrl)

    // if (!isFormValid) {
    //   return; // Prevent form submission if there are validation errors
    // }

    // Register logic here (e.g., send data to the backend)
    // console.log("Name:", name);
    // console.log("Email:", email);
    // console.log("Photo URL:", photoUrl);
    // console.log("Password:", password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-white">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
          Create Your Account
        </h1>
        






        <form onSubmit={registerHandle}>
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
           
              className="w-full p-4 bg-gray-50 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
             name="name"
            //   onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
        
            //   onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="mb-6">
            <label htmlFor="photoUrl" className="block text-gray-700 text-lg font-medium mb-2">
              Photo URL
            </label>
            <input
              type="text"
              name="photoUrl"
              className="w-full p-4 bg-gray-50 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your photo URL"
            //   value={photoUrl}
            //   onChange={(e) => setPhotoUrl(e.target.value)}
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
            //   value={password}
            //   onChange={(e) => {
            //     setPassword(e.target.value);
            //     validatePassword(e.target.value);
            //   }}
              required
            />
            {/* {passwordError && (
              <p className="text-red-500 text-sm mt-2">{passwordError}</p>
            )} */}
          </div>

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full p-4 text-black text-lg font-semibold rounded-lg shadow-md  'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400" >
              Register
            </button>
          </div>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
