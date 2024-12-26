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
          height: '400px',
          width: "auto",
          objectFit: "cover",
          position: "relative",
        }}
      />

      {/* Text Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: '10px',
          backgroundImage: `url(${ServiceImage})`,
          backgroundSize: "cover",
          width: "100%",
          // padding: "10px",
        }}
        className="text-overlay"
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
  );
};

export default ServiceCard;
