import React from "react";
import AboutOne from "../../../assets/Home/Vector1.png";
import AboutTwo from "../../../assets/Home/Vector2.png";
import AboutVector from "../../../assets/Home/AboutVector.png";
import "./AboutHome.css"; // Optional: add styles here
import Button from "../../../common/Button/Button";
import "../../../index.css";


const AboutHome = () => {
  return (
    <div className="row PaddingContainer d-flex justify-content-center align-items-center ">
      <div className="col-lg-6 " style={{ height: "auto" }}>
        <div className="row d-flex justify-content-center align-items-center">
         
            <div className=" image-container" style={{ width: "600px" }}>
              
                <div className="about-image-main about-image-left p-3" style={{backgroundImage:`url(${AboutVector})`,backgroundRepeat:'no-repeat'}}>
                  <img
                    src={AboutOne}
                    className="image-vector-clip"
                    height="100%"
                    width="100%"
                    alt="About One"
                  />
                </div>
              
              <div className="about-image-main about-image-right p-3" style={{backgroundImage:`url(${AboutVector})`,backgroundRepeat:'no-repeat'}}>
                <img
                  src={AboutTwo}
                  
                  className="image-vector-clip  "
                  height='100%'
                  width="100%"
                  style={{objectFit: "cover"}}
                  alt="About Two"
                />
              </div>
            </div>
         
        </div>
      </div>
      <div className="col-lg-6 mt-3 ">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-12">
            <div className="row MarginBottomText1">
              <div className="col-12 text-center text-lg-start ">
                <h1 className="heading_primary">About Augmented</h1>
              </div>
            </div>
            <div className="row MarginBottomText1">
              <div className="col-12 text-center text-lg-start">
                <p className="text_primary">
                  We are a specialized software company at the forefront of
                  augmented reality (AR) technology, With a passion for
                  innovation and a deep understanding of the power of AR, we are
                  dedicated to creating exceptional digital{" "}
                </p>
              </div>
            </div>
            <div
              className="row  d-flex justify-content-center justify-content-lg-start"
              style={{}}
            >
              <div
                className="col-3 col-lg-3 text-center text-lg-start"
                style={{ minWidth: "250px" }}
              >
                <Button
                  name="Read More"
                  Height="75px"
                  FontStylte="heading_fifth_1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
