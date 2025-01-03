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
            <div className="col-12 p-0 MarginContainer" style={{}}>
              <HeroSection />
            </div>
          </div>
          <div className="row  Container" style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
            <div className="col-12   my-1 py-1 my-sm-3 py-sm-3 my-lg-5 py-lg-5">
              <AboutHome />
            </div>
          </div>

          
          <div className="row my-1 py-1 my-sm-3 py-sm-3 my-lg-5 py-lg-5 " >
            <div className="col-12 ">
              <ServicesHome />
            </div>
          </div>
          <div className="row  Container " >
            <div className="col-12 my-1 py-1 my-sm-3 py-sm-3 my-lg-5 py-lg-5 ">
              <TeamHome />
            </div>
          </div>
          <div className="row  Container mt-1 py-1 mt-sm-3 py-sm-3 mt-lg-5 py-lg-5" >
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
            zIndex:'-1'
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
            zIndex:'-1'

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
            zIndex:'-1'
          }}
        ></div>
          <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            bottom: "-100px",
            left: "-500px",
            zIndex:'-1'
            // backgroundColor:'red'
          }}
        ></div>
           <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            bottom: "1350px",
            left: "-400px",
            zIndex:'-1'
            
            // backgroundColor:'red'
          }}
        ></div>
        <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            bottom: "500px",
            right: "-400px",
            zIndex:'-1'
            
            // backgroundColor:'red'

          }}
        ></div>
      </div>

  );
};
export default Home;
