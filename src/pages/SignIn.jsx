import React from "react";
import { useEffect } from "react";
import LoginImg from "../assets/login.jpg";
import LoginLogo from "../assets/login-logo.png";
// import { Link } from "react-router-dom";
// import SignInImg from "../assets/signin.png";
// import "bootstrap/dist/css/bootstrap.min.css";

const SignIn = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Sign In";
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-center h-screen w-full">
      <div className="xl:w-2/3 hidden xl:block">
        <img
          className="w-full h-full object-cover"
          src={LoginImg}
          alt="LoginImg"
        />
      </div>

      <div className="flex flex-col xl:w-1/3 lg:w-full justify-center">
        <form className="max-w-[500px] w-full mx-auto lg:p-0 p-8 px-8 rounded-lg">
          <img src={LoginLogo} alt="LoginLogo" />
          <h2 className="text-4xl dark:text-black font-bold pt-4 pb-6">
            Welcome, Admin BCR!
          </h2>

          <div className="flex flex-col text-black-900 py-2">
            <label className="font-medium text-lg">Email</label>
            <input
              className="text-center text-lg rounded-xl border mt-2 p-2 focus:bg-indigo-50"
              type="email"
              name="email"
              placeholder="Contoh: johndee@gmail.com"
            />
          </div>

          <div className="flex flex-col text-black-900 py-2">
            <label className="font-medium text-lg">Password</label>
            <input
              className="text-center text-lg rounded-xl border mt-2 p-2 focus:bg-indigo-50"
              type="password"
              name="email"
              placeholder="6+ Karakter"
            />
          </div>

          <button
            className="w-full my-5 py-2 rounded-xl bg-blue-700 shadow-xl shadow-blue-200 hover:bg-blue-600 transition duration-300 dark:text-white font-medium text-lg"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
