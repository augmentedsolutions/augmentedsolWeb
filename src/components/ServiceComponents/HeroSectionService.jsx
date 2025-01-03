import React from "react";
import "./HeroSection.css";
import "../../index.css";
const HeroSectionService = ({ img, text1, text2 }) => {
  return (
    <header class="hero" style={{backgroundImage:`url(${img})` ,backgroundRepeat:'none',backgroundSize:'cover'}}>
      <div class="hero-content">
        <h1 class="hero-title">{text1}</h1>
        <div className="row justify-content-center">
         <div className="col-10">

        <p class=" hero-subtitle larger-text">{text2}</p>
         </div>
        </div>
        {/* <a href="#" class="hero-button">
          Get Started
        </a> */}
      </div>
    </header>
  );
};

export default HeroSectionService;
