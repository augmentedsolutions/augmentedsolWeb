import React from "react";
import "../../../index.css";
import ServiceImage from "../../../assets/Home/Service Bacground.png";
import "./ServiceCard.css"
const ServiceCard = ({ image }) => {
  return (
    <div
      className=""
      style={{
        position: "relative",
        backgroundImage: `url(${image})`,
        height: "450px",
        width: "500px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          backgroundImage: `url(${ServiceImage})`,
          backgroundSize: "cover",
          padding: "10px",
        }}
         className="col-8"
      >
        <p className="text_secondary" style={{textDecoration:'underline'}}>Web Development</p>
        <p className="text_paragraph">
          A Network of 3D virtual worlds focused on social connection.
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
