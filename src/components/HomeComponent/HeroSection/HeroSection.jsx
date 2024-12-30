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
          <img src={BannerImage} class="img-fluid image1" width="100%" alt="..."></img>
          <img src={HoverImageHome} class="img-fluid image2" width="100%" alt="..."></img>
          <div className="row PaddingAllContainer HeroSectionText" style={{  }}>
            <div className="col-12 col-lg-10 " style={{display:'flex',justifyContent:'start',flexDirection:'column'}}>
              <h1 className="text3 MarginBottomText1 " style={{}}>
                Virtual Reality
              </h1>
              <div className="row p-0 m-0">
                <div className="col-12 col-xl-9 col-xxl-6 p-0 m-0"> 

              <p className="text3 larger-text MarginBottomText1 " style={{}}>
              Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut.
              </p>
                </div>
              </div>
              <div className="row p-0 m-0 Btn  " style={{display:'flex',justifyContent:'start',alignItems:'start'}}>
             <div className="col-2 p-0 m-0" style={{minWidth:'80px'}} >
              
              <Button name='Lets Start'  FontStylte={'heading_fifth_1'} justify='start'/>
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
