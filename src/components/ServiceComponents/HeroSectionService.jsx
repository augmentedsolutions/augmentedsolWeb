import React from "react";
import './HeroSection.css'
const HeroSectionService = ({ img,text1,text2 }) => {
  return (
    <div className="row">
      <div className="col-12 containerHover" style={{ backgroundColor:'red',overflow:'hidden', position: "relative",display:'flex',alignItems:'center',justifyContent:'center' }}>
        <img src={img} width="100%" />
        <div className="row" style={{position:'absolute',top:'50%'}}>
          <div className="col-6 " style={{height:'250px',width:'600px'}}>
            <h1 className="text1" style={{}}>{text1}</h1>
            <h2 className="text2" style={{}}>{text2}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionService;
