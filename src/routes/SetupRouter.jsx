import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CarDetails from "../pages/CarDetails";
import SearchCar from "../pages/SearchCar";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";

const SetupRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="car-details" element={<CarDetails />} />
        <Route exact path="search-car" element={<SearchCar />} />
        <Route exact path="sign-in" element={<SignIn />} />
        <Route exact path="sign-up" element={<SignUp />} />
        <Route exact path="not-found" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default SetupRouter;
