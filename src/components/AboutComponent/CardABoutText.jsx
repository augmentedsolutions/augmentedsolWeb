import React from "react";
import Button from "../../common/Button/Button";
import "../../index.css";
const CardABoutText = ({ text, paragraph }) => {
  return (
    <div className="about-wrapper">
      <h1 className="text-white MarginBottomContentContainer">{text}</h1>
      <p className="text-white lead mb-4 mb-md-5">{paragraph}</p>
      <div className="row text-center text-lg-start justify-content-center justify-content-lg-start">
      <div className="col-5 col-sm-4 col-md-3  col-lg-6 col-xl-5 col-xxl-4" >

      <Button name='Read More'/>
      </div>
      </div>
    </div>
  );
};

export default CardABoutText;
