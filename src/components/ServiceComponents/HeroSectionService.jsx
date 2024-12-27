import React from "react";
import './HeroSection.css'
import '../../index.css'
const HeroSectionService = ({ img,text1,text2 }) => {
  return (
    <div className="row">
      <div className="col-12 containerHover" style={{ overflow:'hidden', position: "relative",display:'flex',alignItems:'center',justifyContent:'center' }}>
        <img className="ServiceHeroBanner" src={img} width="100%" />
        <div className="row" style={{position:'absolute',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div className="col-10  text-center " style={{}}>
            <div className="row" style={{display:'flex',justifyContent:'center',alignItems:"center"}}>
             <div className="col-5">

            <h1 className="heading_primary_1 text1" style={{}}>{text1}</h1>
             </div>
            </div>
            <div className="row">
              <div col-8 className="MarginBottomText1">

            <h2 className="text_primary_1 text2" style={{}}>{text2}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionService;
