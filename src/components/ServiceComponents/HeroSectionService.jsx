import React from "react";
import "./HeroSection.css";
import "../../index.css";
const HeroSectionService = ({ img, text1, text2 }) => {
  return (
    <div className="row">
      <div
        className="col-12  containerHover"
        style={{
          overflow: "hidden",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img className="ServiceHeroBanner" src={img} width="100%" style={{minHeight:'150px'}}/>
        <div
          className="row"
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-10  text-center " style={{}}>
            <div
              className="row "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="col-12 col-md-5 heading_primary_1 mb-1 mb-sm-3 mb-xl-5 ">
                <span className=" text1 MarginBottomText1" style={{}}>
                  {text1}
                </span>
              </div>
            </div>
            <div className="row">
              <div col-8 className="">
                <span className=" text2 larger-text MarginBottomText1" style={{}}>
                  {text2}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionService;
