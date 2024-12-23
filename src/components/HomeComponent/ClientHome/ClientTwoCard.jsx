import React from "react";
import "../../../index.css";
const ClientTwoCard = ({ Img, comment, name, email }) => {
  return (
    <div
      className="col-11 background_gradient_third border_radius_one " 
      style={{ margin: "20px 20px 20px 20px", padding:'35px 15px 35px 15px' ,height:'215.83px'}}
    >
      <div className="row Flex">
<div className="col-11">
<div className="row">


        <div className="col-12 text_paragraph_forth">{comment}</div>
        <div className="col-12 pt-3">
          <div className="row">
            <div className="col-2">
              <img src={Img} />
            </div>
            <div className="col-10">
              <div className="row">
                <div className="col-12 text_paragraph_forth" >{name}</div>
                <div className="col-12 text_paragraph_fifth">{email}</div>
              </div>
            </div>
          </div>
        </div>

</div>
</div>
      </div>
    </div>
  );
};

export default ClientTwoCard;
