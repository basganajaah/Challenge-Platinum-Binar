import React from "react";
import FAQ from "../components/FAQ";
import OurServices from "../components/OurServices";
import WhyUs from "../components/WhyUs";
import RentBanner from "../components/RentBanner";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Welcome to Binar Rental Car";
  }, []);
  return (
    <>
      <OurServices />
      <WhyUs />
      <RentBanner />
      <FAQ />
    </>
  );
};

export default LandingPage;
