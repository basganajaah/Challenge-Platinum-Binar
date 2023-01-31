import React from "react";
import { useEffect } from "react";

const CarDetails = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Car Details";
  }, []);
  return <div>CarDetails</div>;
};

export default CarDetails;
