import React from "react";
import "../../../index.css";
import ServiceCard from "./ServiceCard";
const ServicesHome = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text_primary">Augmented Services</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
           <ServiceCard/>
        </div>
        <div className="col-4">
        <ServiceCard/>
        </div>
        <div className="col-4">
        <ServiceCard/>
        </div>
      </div>
    </>
  );
};

export default ServicesHome;
