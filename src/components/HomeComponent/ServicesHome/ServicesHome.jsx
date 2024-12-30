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
      <div className="row PaddingContainer">
        <div className="col-12 text-center">
          <h2 className="">Augmented Services</h2>
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
