import React from "react";
import Button from "../../common/Button/Button";
import '../../index.css'
const CardABoutText = ({text,paragraph}) => {
  return (
    <div className="row">
      <div className="col-9 pt-5">
        <h1 className="text_primary">{text}</h1>
      </div>
      <div className="col-9 text_paragraph pt-5">
        <p>
        {paragraph}
        </p>
      </div>
      <div className="col-4 pt-5 ">
        <Button name='Read More'/>
      </div>
    </div>
  );
};

export default CardABoutText;
