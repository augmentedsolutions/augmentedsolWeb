import React from "react";
import BannerImage from "../../../assets/Home/HeroSection.png";
import HoverImageHome from "../../../assets/Home/HoverImageHome.png";
import './HeroSection.css'
import Button from "../../../common/Button/Button";
import '../../../index.css'
const HeroSection = () => {
  return (
    <>
      <div className="row p-0 m-0 ">
        <div
          className="col-12 p-0 m-0 containerHover"
          style={{
            overflow: "hidden",
            position: "relative",
           display:'flex',
            justifyContent:'center',
            alignItems:"center"
          }}
        >
          <img src={BannerImage} class="img-fluid image1" width="100%" style={{minHeight:'170px'}} alt="..."></img>
          <img src={HoverImageHome} class="img-fluid image2" width="100%" style={{minHeight:'170px'}} alt="..."></img>
          <div className="mt-1 mt-sm-0 row PaddingAllContainer HeroSectionText" style={{  }}>
            <div className="col-12 col-lg-10 " style={{display:'flex',justifyContent:'start',flexDirection:'column'}}>
              <span className="text3 heading_primary_1 mb-1 mb-sm-3 mb-xl-5 " style={{}}>
                Virtual Reality
              </span>
              <div className="row p-0 m-0 mb-1 mb-sm-3 mb-xl-5 ">
                <div className="col-12 col-xl-9 col-xxl-6 p-0 m-0"> 

              <span className=" text3 larger-text MarginBottomText1 " style={{}}>
              orem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut.
              </span>
                </div>
              </div>
              <div className="row p-0 m-0 Btn  " style={{display:'flex',justifyContent:'start',alignItems:'start'}}>
             <div style={{minWidth:'100px'}} className="Btn-Hero-Section col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-1 p-0 m-0"   >
              
              <Button name='Lets Start' FontSize='1px'  justify='start'/>
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
