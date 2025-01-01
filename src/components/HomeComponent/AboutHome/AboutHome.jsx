import React from "react";
import AboutOne from "../../../assets/Home/Vector1.png";
import AboutTwo from "../../../assets/Home/Vector2.png";
import AboutVector from "../../../assets/Home/AboutVector.png";
import "./AboutHome.css"; // Optional: add styles here
import Button from "../../../common/Button/Button";
import "../../../index.css";
import { NavLink } from "react-router-dom";

const AboutHome = () => {
  return (
    <div className="">
      <div className="row gy-4 gy-lg-0 align-items-lg-center"style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className="col-12 col-lg-6" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
          
            <div className=" image-containerr">
              
              <div
                className="about-image-main about-image-left "
                style={{
                  backgroundImage: `url(${AboutVector})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img
                  src={AboutOne}
                  className="image-vector-clip"
                  height="100%"
                  width="100%"
                  alt="About One"
                />
              </div>

              <div
                className="about-image-main about-image-right "
                style={{
                  backgroundImage: `url(${AboutVector})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                <img
                  src={AboutTwo}
                  className="image-vector-clip  "
                  height="100%"
                  width="100%"
                  style={{ objectFit: "cover" }}
                  alt="About Two"
                />
              </div>
            </div>
          
        </div>
        <div className="col-12 col-lg-6 col-xxl-6 text-start" style={{display:'flex',justifyContent:'center'}} >
          <div className="row " style={{display:"flex",justifyContent:'start',alignItems:'center'}}>
            <div className=" col-12 col-lg-12 col-xl-11 col-xxl-9  text-lg-start text-center">
              <div className="about-wrapper">
                <h1 className=" text-white mb-3 mb-lg-5">About Augmented</h1>
                <p className="lead text-white mb-3 mb-lg-5">
                  {" "}
                  We are a specialized software company at the forefront of
                  augmented reality (AR) technology, With a passion for
                  innovation and a deep understanding of the power of AR, we are
                  dedicated to creating exceptional digital{" "}
                </p>
                <div className="row text-center text-lg-start justify-content-center justify-content-lg-start">
      <div className="col-auto" >

      <Button name='Read More'/>
      </div>
      </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
