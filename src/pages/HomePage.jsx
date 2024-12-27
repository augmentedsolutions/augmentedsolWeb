import React from "react";
import HeroSection from "../components/HomeComponent/HeroSection/HeroSection";
import "../index.css";
import AboutHome from "../components/HomeComponent/AboutHome/AboutHome";
import ServicesHome from "../components/HomeComponent/ServicesHome/ServicesHome";
import TeamHome from "../components/HomeComponent/TeamHome/TeamHome";
import ClientHome from "../components/HomeComponent/ClientHome/ClientHome";
import ContactHome from "../components/HomeComponent/ContactHome/ContactHome";
const Home = () => {
  return (
    
      <div className="row " style={{ position: "relative" }}>
        <div className="col-12 ">
          <div className="row Container">
            <div className="col-12 MarginContainer" style={{}}>
              <HeroSection />
            </div>
          </div>
          <div className="row  Container" >
            <div className="col-12 MarginContainer">
              <AboutHome />
            </div>
          </div>

          
          <div className="row MarginContainer " >
            <div className="col-12 ">
              <ServicesHome />
            </div>
          </div>
          <div className="row  Container" >
            <div className="col-12 MarginContainer ">
              <TeamHome />
            </div>
          </div>
          <div className="row  Container" >
            <div className="col-12  MarginContainer">
              <ClientHome />
            </div>
          </div>
       
        </div>

        <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            top: "-100px",
            left: "-20px",
          }}
        ></div>

        <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            top: "200px",
            left: "-400px",
          }}
        ></div>
        <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            top: "500px",
            right: "-400px",
          }}
        ></div>
          <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            bottom: "-100px",
            left: "-600px",
            // backgroundColor:'red'
          }}
        ></div>
           <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            bottom: "1000px",
            left: "-600px",
            // backgroundColor:'red'
          }}
        ></div>
        <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            bottom: "300px",
            right: "-600px",
            // backgroundColor:'red'
          }}
        ></div>
      </div>

  );
};
export default Home;
