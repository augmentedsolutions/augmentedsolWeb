import React from "react";
import Button from "../../common/Button/Button";
import "../../index.css";
const CardABoutText = ({ text, paragraph }) => {
  return (
    <div className="about-wrapper">
      <h2 className="MarginBottomContentContainer">{text}</h2>
      <p className=" mb-4 mb-md-5">{paragraph}</p>
      <Button name='Read More'/>
    </div>
  );
};

export default CardABoutText;
