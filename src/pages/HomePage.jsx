import React from "react";
import HeroSection from "../components/HomeComponent/HeroSection/HeroSection";
import "../index.css";
import AboutHome from "../components/HomeComponent/AboutHome/AboutHome";
import ServicesHome from "../components/HomeComponent/ServicesHome/ServicesHome";
import TeamHome from "../components/HomeComponent/TeamHome/TeamHome";
import ClientHome from "../components/HomeComponent/ClientHome/ClientHome";
const Home = () => {
  return (
    <>
      <div className="row Container" style={{position:'relative'}}>
        <div className="col-12">
          <div className="row">
            <div className="col-12" style={{}}>
              <HeroSection />
            </div>
          </div>
          <div className="row " style={{marginTop:"100px"}}>
            <div className="col-12 ">
               <AboutHome/>
            </div>
          </div>
          <div className="row " style={{marginTop:"100px"}}>
            <div className="col-12 ">
               <ServicesHome/>
            </div>
          </div>
          <div className="row " style={{marginTop:"100px"}}>
            <div className="col-12 ">
               <TeamHome/>
            </div>
          </div>
          <div className="row " style={{marginTop:"100px"}}>
            <div className="col-12 ">
               <ClientHome/>
            </div>
          </div>
        </div>

        <div className="gradient_radial" style={{height:'950px',width:'950px', position:'absolute' , top:'-450px',left:'-20px' }}>
                
        </div>
        <div className="gradient_radial" style={{height:'950px',width:'950px', position:'absolute' , top:'200px',left:'-400px' }}>
                
        </div>
        <div className="gradient_radial" style={{height:'950px',width:'950px', position:'absolute', top:'500px' ,right:'-400px' }}>
                
                </div>
      </div>
    </>
  );
};
export default Home;
