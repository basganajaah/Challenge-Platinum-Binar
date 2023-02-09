import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import SignInImg from "../assets/signin.png";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Sign Up";
  }, []);

  return (
    <div className="signin">SignUPPage</div>
  );
};

export default SignUp;
