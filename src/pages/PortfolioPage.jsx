import React from "react";
import "../index.css";
import PortfolioHersoSection from "../assets/Protfolio/ServicesHersoSection.png";

import HeroSectionService from "../components/ServiceComponents/HeroSectionService";

import PortfolioCarousel from "../components/PortfolioPage/PortfolioCarousel";
const PortfolioPage = () => {
  return (
    <div className="row Container">
      <div className="col-12">
        <div className="row MarginContainer">
          <div className="col-12 ">
            <HeroSectionService img={PortfolioHersoSection} />
          </div>
        </div>
        <div className="row MarginContainer">
          <div className="col-12">
            <div className="row">
             <PortfolioCarousel/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioPage;
