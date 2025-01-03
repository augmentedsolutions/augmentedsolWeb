import React from "react";
import HeroSectionService from "../components/ServiceComponents/HeroSectionService";
import UseCaseBGImage from '../assets/UseCase/blogmain.png' 
import UseCaseCarousel from "../components/UseCaseComponent/UseCaseCarousel";

const UseCasePage = () => {
  return (
    <div className="row " style={{ position: "relative" }}>
      <div className="col-12 ">
        <div className="row Container MarginContainer">
          <div className="col-12 p-0 ">
            <HeroSectionService
              img={UseCaseBGImage}
              text1="Use Case"
              text2="Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut."
            />
          </div>
        </div>
        <div className="row Container MarginContainer my-3 my-lg-5" >
          <div className="col-12 p-0 ">
             <UseCaseCarousel/>
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

export default UseCasePage;
