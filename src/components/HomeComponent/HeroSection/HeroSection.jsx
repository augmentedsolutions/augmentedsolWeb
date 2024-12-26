import React from "react";
import BannerImage from "../../../assets/Home/HeroSection.png";
import HoverImageHome from "../../../assets/Home/HoverImageHome.png";
import './HeroSection.css'
import Button from "../../../common/Button/Button";
import '../../../index.css'
const HeroSection = () => {
  return (
    <>
      <div className="row ">
        <div
          className="col-12 containerHover"
          style={{
            overflow: "hidden",
            position: "relative",
          
          }}
        >
          <img src={BannerImage} class="img-fluid image1" width="100%" alt="..."></img>
          <img src={HoverImageHome} class="img-fluid image2" width="100%" alt="..."></img>
          <div className="row PaddingAllContainer" style={{ position: "absolute",top:'10%' }}>
            <div className="col-10" style={{display:'flex',justifyContent:'start',flexDirection:'column'}}>
              <h1 className="text3 MarginBottomText1 heading_primary_1" style={{}}>
                Virtual Reality
              </h1>
              <div className="row p-0 m-0">
                <div className="col-12 col-xl-6 p-0 m-0"> 

              <h2 className="text3 text_primary_1 MarginBottomText1 " style={{}}>
              Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut.
              </h2>
                </div>
              </div>
              <div className="row p-0 m-0 Btn  " style={{display:'flex',justifyContent:'start',alignItems:'start'}}>
             <div className="col-2 p-0 m-0" style={{minWidth:'172px',height:'62px'}}>
              
              <Button name='Lets Start' Height='63px' FontStylte={'heading_fifth_1'}/>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
