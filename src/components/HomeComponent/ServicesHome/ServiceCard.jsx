import React from "react";
import "../../../index.css";
import ServiceImage from "../../../assets/Home/Service Bacground.png";

const ServiceCard = ({ image }) => {
  return (
    <div
      className="service-card"
      style={{
        position: "relative",
        height: "auto",
        width: "auto",
      }}
    >
      {/* Main Image */}
      <img
        src={image}
        alt="Service"
        style={{
          height: '500px',
          width: "auto",
          objectFit: "cover",
          position: "relative",
        }}
      />

      {/* Text Overlay */}
      <div className="row p-0 m-0 " style={{ position: "absolute",
        // padding:'20px 50px 20px 50px',
          
          left:'0%'
          ,bottom:'0%'}}>
        <div className="col-8 p-0 m-0" style={{
         
          
         backgroundImage: `url(${ServiceImage})`,
         backgroundSize: "cover",
         
         // padding: "10px",
       }} >

      <div
        
        className="text-overlay"
        style={{margin:'20px 50px 20px 50px',}}
      >
        <p
          className="text_secondary"
          style={{ textDecoration: "underline", margin: 0 }}
          >
          Web Development
        </p>
        <p className="text_paragraph" style={{ margin: 0 }}>
          A Network of 3D virtual worlds focused on social connection.
        </p>
          </div>
      </div>
      </div>
    </div>
  );
};

export default ServiceCard;
