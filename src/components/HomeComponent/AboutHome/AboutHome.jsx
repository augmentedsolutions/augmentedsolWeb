import React from "react";
import AboutOne from "../../../assets/Home/Vector1.png";
import AboutTwo from "../../../assets/Home/Vector2.png";
import AboutVector from "../../../assets/Home/AboutVector.png";
import "./AboutHome.css"; // Optional: add styles here
import Button from "../../../common/Button/Button";
import "../../../index.css";

const AboutHome = () => {
  return (
    <div className="">
      <div className="row gy-4 gy-lg-0 align-items-lg-center">
        <div className="col-12 col-lg-6">
          <div className="row d-flex justify-content-center align-items-center">
            <div className=" image-container">
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
        </div>
        <div className="col-12 col-lg-6 col-xxl-6">
          <div className="row justify-content-lg-end">
            <div className="col-12 col-lg-11 text-md-start text-center">
              <div className="about-wrapper">
                <h2 className="MarginBottomContentContainer">About Augmented</h2>
                <p className="lead mb-4 mb-md-5">
                  {" "}
                  We are a specialized software company at the forefront of
                  augmented reality (AR) technology, With a passion for
                  innovation and a deep understanding of the power of AR, we are
                  dedicated to creating exceptional digital{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
