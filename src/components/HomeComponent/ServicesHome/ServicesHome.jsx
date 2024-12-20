import React from "react";
import "../../../index.css";
import ServiceCard from "./ServiceCard";
import ServiceIMage1 from '../../../assets/Home/AgmentServices1.png'
import ServiceIMage2 from '../../../assets/Home/AgmentServices2.png'
import ServiceIMage3 from '../../../assets/Home/AgmentServices3.png'

const ServicesHome = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="text_primary">Augmented Services</h1>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-4">
           <ServiceCard image={ServiceIMage1}/>
        </div>
        <div className="col-4">
        <ServiceCard image={ServiceIMage2}/>
        </div>
        <div className="col-4">
        <ServiceCard image={ServiceIMage3}/>
        </div>
      </div>
    </>
  );
};

export default ServicesHome;
