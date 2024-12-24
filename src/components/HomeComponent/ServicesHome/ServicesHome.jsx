import React from "react";
import "../../../index.css";
import ServiceCard from "./ServiceCard";
import ServiceIMage1 from '../../../assets/Home/AgmentServices1.png'
import ServiceIMage2 from '../../../assets/Home/AgmentServices2.png'
import ServiceIMage3 from '../../../assets/Home/AgmentServices3.png'
import Carousel from "./Carousle";

const ServicesHome = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="heading_primary">Augmented Services</h1>
        </div>
      </div>
      <div className="row mt-3">

        <div className="row">
           <div className="col-12">
           <Carousel/>
           </div> 
        </div>
      </div>
    </>
  );
};

export default ServicesHome;
