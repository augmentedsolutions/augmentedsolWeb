import React from "react";
import Button from "../../common/Button/Button";
import '../../index.css'
const CardABoutText = ({text,paragraph}) => {
  return (
    <div className="row">
      <div className="text-center text-lg-start col-lg-9 pt-5">
        <h1 className="heading_primary">{text}</h1>
      </div>
      <div className="text-center text-lg-start col-lg-11 text_primary pt-5">
        <p>
        {paragraph}
        </p>
      </div>
      <div className="col-12 col-lg-5 pt-5 ">
        <Button name='Read More'/>
      </div>
    </div>
  );
};

export default CardABoutText;
