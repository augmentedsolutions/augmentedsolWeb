import React, { useState } from "react";
import BannerImage from "../../../assets/Home/HeroSection.png";
import HoverImageHome from "../../../assets/Home/HoverImageHome.png";
import './HeroSection.css'
import Button from "../../../common/Button/Button";
import '../../../index.css'
const HeroSection = () => {
  const [hover,setHover]=useState(false)
  return (
    <>
      <header onMouseOut={()=>setHover(false)} onMouseOver={()=>setHover(true)} class="heroPage" style={{backgroundImage:`url( ${hover?BannerImage:HoverImageHome})` ,backgroundRepeat:'none',backgroundSize:'cover'}}>
      <div class="hero-content ms-5">
        <div className= "me-1 me-sm-3 me-lg-5 Service-Hero-Content row justify-content-start">
         <div className=" col-lg-6 col-xxl-5">
        <h1 class="text-start   mb-2 mb-sm-3 mb-lg-5 hero-title">Virtual Reality</h1>

        <p class="text-start hero-subtitle larger-text mb-2 mb-sm-3 mb-lg-5">orem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut.</p>
        <div className="row ">
          <div className="col-auto ">

        <Button name='Lets Start' FontSize='1px'  justify='start'/>
          </div>
        </div>
         </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default HeroSection;
