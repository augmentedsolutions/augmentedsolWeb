import React from "react";
import BannerImage from "../../../assets/Home/HeroSection.png";
import HoverImageHome from "../../../assets/Home/HoverImageHome.png";
import './HeroSection.css'
import Button from "../../../common/Button/Button";
const HeroSection = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-12 containerHover"
          style={{
            overflow: "hidden",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <img src={BannerImage} class="img-fluid image1" width="100%" alt="..."></img>
          <img src={HoverImageHome} class="img-fluid image2" width="100%" alt="..."></img>
          <div className="row" style={{ position: "absolute" }}>
            <div className="col-6 " style={{ height: "250px" }}>
              <h1 className="text3 ms-5" style={{}}>
                Virtual Reality
              </h1>
              <h2 className="text3 m-5" style={{}}>
                lorem3fdsjfkdsfjkdsfb sdnfbdsfbdsnfbdsmnfbdsmnfbmsdnfbsdjfbdsjfbdshfsf
                fdbfdsjfdsbfsdbfjsd dbfhdsbfdsbfsdjf fbjd fjdsfdsnbfdsjf bfbdsfbsdj
              </h2>
              <div className="row Btn m-5">
             <div className="col-6">

              <Button name='Start'/>
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
