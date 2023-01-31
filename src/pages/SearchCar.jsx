import React from "react";
import { useEffect } from "react";

const SearchCar = () => {
  useEffect(() => {
    document.title = "Binar Car Rental - Search Car";
  }, []);
  return <div>SearchCar</div>;
};

export default SearchCar;
