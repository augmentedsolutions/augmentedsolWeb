import React from "react";
import "../index.css";
import PortfolioHersoSection from "../assets/Protfolio/ServicesHersoSection.png";

import HeroSectionService from "../components/ServiceComponents/HeroSectionService";

import PortfolioCarousel from "../components/PortfolioPage/PortfolioCarousel";
const PortfolioPage = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="row Container" style={{ position: "relative" }}>
        <div className="col-12">
          <div className="row MarginContainer">
            <div className="col-12 ">
              <HeroSectionService
                img={PortfolioHersoSection}
                text1="Portfolio"
                text2="Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut."
              />
            </div>
          </div>
          <div className="row MarginContainer">
            <div className="col-12">
              <div className="row">
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
            // backgroundColor:"red"
          }}
          ></div> 


      </div>
    </div>
  );
};
export default PortfolioPage;
