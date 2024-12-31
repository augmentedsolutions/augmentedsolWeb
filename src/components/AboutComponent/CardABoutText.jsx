import React from "react";
import Button from "../../common/Button/Button";
import "../../index.css";
const CardABoutText = ({ text, paragraph }) => {
  return (
    <div className="about-wrapper">
      <h1 className="text-white MarginBottomContentContainer">{text}</h1>
      <p className="text-white lead mb-4 mb-md-5">{paragraph}</p>
      <Button name='Read More'/>
    </div>
  );
};

export default CardABoutText;
