import React from "react";
import "../index.css";
import HeroSectionService from "../components/ServiceComponents/HeroSectionService";
import HeroSectionImage from "../assets/About/HeroSectionImage.png";
import CardAboutOne from "../components/AboutComponent/CardAboutOne";
import AboutImage from "../assets/About/AboutImage.png";
import CardAboutTwo from "../components/AboutComponent/CardAboutTwo";

const AboutPage = () => {
  return (
    
      <div className="row Container" style={{ position: "relative" }}>
        <div className="col-12">
          <div className="row ">
            <div className="12 p-0 MarginContainer ">
              <HeroSectionService
                img={HeroSectionImage}
                text1="About"
                text2="Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut."
              />
            </div>
            <div className="12 MarginContainer ">
              <CardAboutOne img={AboutImage} />
            </div>
            <div className="12 MarginContainer ">
              <CardAboutTwo img={AboutImage} />
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
export default AboutPage;
