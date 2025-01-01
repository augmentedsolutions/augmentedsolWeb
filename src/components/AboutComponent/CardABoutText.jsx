import React from "react";
import Button from "../../common/Button/Button";
import "../../index.css";
const CardABoutText = ({ text, paragraph }) => {
  return (
    <div className="about-wrapper">
      <h1 className="text-white mb-1 mb-sm-2 mb-lg-5">{text}</h1>
      <p className="text-white lead mb-1 mb-sm-2 mb-lg-5">{paragraph}</p>
      <div className="row text-center text-lg-start justify-content-center justify-content-lg-start">
      <div style={{minWidth:''}} className="col-auto " >

      <Button name='Read More'/>
      </div>
      </div>
    </div>
  );
};

export default CardABoutText;
