import React from "react";
import "../index.css";
import PortfolioHersoSection from "../assets/Protfolio/ServicesHersoSection.png";

import HeroSectionService from "../components/ServiceComponents/HeroSectionService";

import PortfolioCarousel from "../components/PortfolioPage/PortfolioCarousel";
import axios from "axios";
const PortfolioPage = () => {

  return (

      <div className="row " style={{ position: "relative" }}>
        <div className="col-12 ">
          <div className="row Container MarginContainer">
            <div className="col-12 p-0 ">
              <HeroSectionService
                img={PortfolioHersoSection}
                text1="Portfolio"
                text2="Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut."
              />
            </div>
          </div>
          <div className="row my-2 my-3 my-5">
            <div className="col-12">
              <div className="row " style={{minHeight:'40vh',alignItems:'center'}}>
                <PortfolioCarousel />
              </div>
            </div>
          </div>
        </div>

        <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            top: "250px",
            left: "-600px",
            zIndex:'-1'
            // backgroundColor:"red"
          }}
          ></div>
<div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            top: "400px",
            right: "-600px",
            zIndex:'-1'
            // backgroundColor:"red"
          }}
          ></div> 


      </div>

  );
};
export default PortfolioPage;
