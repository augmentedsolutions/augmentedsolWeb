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
      <div className="row p-1 p-sm-3 p-lg-5">
         <div className="col-12 mb-sm-3 mb-1 mb-lg-5 text-center">
          <h1 className="text-white">Augmented Services</h1>
        </div>
      </div>
      <div className="row ">

        <div className="row p-0 m-0">
           <div className="col-12 p-0 m-0">
           <Carousel/>
           </div> 
        </div>
      </div>
    </>
  );
};

export default ServicesHome;
