import React from "react";
import "../index.css";
import HeroSectionService from "../components/ServiceComponents/HeroSectionService";
import ServiceCard from "../components/ServiceComponents/ServiceCard";
import ServicesImage1 from "../assets/services/ServicesImage1.png";
import ServicesImage2 from "../assets/services/ServicesImage2.png";
import ServicesImage3 from "../assets/services/ServicesImage3.png";
import ServicesImage4 from "../assets/services/ServicesImage4.png";
import ServicesImage5 from "../assets/services/ServicesImage5.png";
import ServicesImage6 from "../assets/services/ServicesImage6.png";
import ServicesImage7 from "../assets/services/ServicesImage7.png";

import ServicesHeroSection from "../assets/services/ServicesHeroSection.png";
const ServicePage = () => {
  return (
    <div style={{ overflow: "hidden" }}>

    <div className="row Container " style={{ position: "relative" }}>
      <div className="col-12">
        <div className="row MarginContainer">
          <div className="col-12">
            <HeroSectionService img={ServicesHeroSection} text1='Services' text2='Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut.'/>
          </div>
        </div>
        <div
          className="row MarginContainer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          >
          <div className="col-auto">
            <div
              className="row gap-5 gap-lg-0  "
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              >
              <ServiceCard
                img={ServicesImage1}
                text="Web Development"
                paragraph="Find our Web Development service, where digital possibilities become reality.
We specialize in crafting dynamic, user-friendly websites tailored to your needs.
From responsive design to e-commerce solutions, our expertise ensures your
online presence shines."
/>
              <ServiceCard
                img={ServicesImage2}
                text="Web Development"
                paragraph="Find our Web Development service, where digital possibilities become reality.
                We specialize in crafting dynamic, user-friendly websites tailored to your needs.
                From responsive design to e-commerce solutions, our expertise ensures your
                online presence shines."
                />
              <ServiceCard
                img={ServicesImage3}
                text="Web Development"
                paragraph="Find our Web Development service, where digital possibilities become reality.
We specialize in crafting dynamic, user-friendly websites tailored to your needs.
From responsive design to e-commerce solutions, our expertise ensures your
online presence shines."
/>
              <ServiceCard
                img={ServicesImage4}
                text="Web Development"
                paragraph="Find our Web Development service, where digital possibilities become reality.
                We specialize in crafting dynamic, user-friendly websites tailored to your needs.
                From responsive design to e-commerce solutions, our expertise ensures your
                online presence shines."
                />
              <ServiceCard
                img={ServicesImage5}
                text="Web Development"
                paragraph="Find our Web Development service, where digital possibilities become reality.
                We specialize in crafting dynamic, user-friendly websites tailored to your needs.
                From responsive design to e-commerce solutions, our expertise ensures your
                online presence shines."
                />
              <ServiceCard
                img={ServicesImage6}
                text="Web Development"
                paragraph="Find our Web Development service, where digital possibilities become reality.
                We specialize in crafting dynamic, user-friendly websites tailored to your needs.
                From responsive design to e-commerce solutions, our expertise ensures your
                online presence shines."
                />
              <ServiceCard
                img={ServicesImage7}
                text="Web Development"
                paragraph="Find our Web Development service, where digital possibilities become reality.
We specialize in crafting dynamic, user-friendly websites tailored to your needs.
From responsive design to e-commerce solutions, our expertise ensures your
online presence shines."
/>
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
    </div>
          </div>
  );
};
export default ServicePage;
