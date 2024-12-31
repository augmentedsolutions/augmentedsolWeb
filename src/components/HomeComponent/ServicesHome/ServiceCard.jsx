import React from "react";
import "../../../index.css";
import ServiceImage from "../../../assets/Home/Service Bacground.png";
import "./ServiceCard.css";
const ServiceCard = ({ image }) => {
  return (
    <div className="col-10 col-lg-11 m-0 p-0" style={{}}> 
      <div class="row card m-0 p-0 ">
        <img
          src={image}
          class=" ServiceCardImg p-0 m-0"
          alt="Stony Beach"
         
          width='auto'
          
          style={{borderRadius:'9px',
           
            border: '0.93px solid rgba(228, 229, 231, 0.7)'
            
            }}
        />
        <div class="p-2 p-md-3  col-8 col-md-6 "  style={{position:"absolute",bottom:"0px",
          backgroundImage: `url(${ServiceImage})`,
         backgroundSize: "cover",
         height:'auto',
         borderBottomLeftRadius:'15px'
         // padding: "10px",
        }}>
          <h2 class="text-white card-title HomeServiceCardText1" style={{textDecoration:'underline'}} >Card title</h2>
          <h3 class="text-white card-text HomeServiceCardText2" style={{}}>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </h3>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
