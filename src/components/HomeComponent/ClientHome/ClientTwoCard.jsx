import React from "react";
import "../../../index.css";

const ClientTwoCard = ({ Img, comment, name, email }) => {
  return (
    <div
      className="col-12 border_radius_one"
      style={{
    
        background: 'rgb(26, 6, 36)',

        border: "3.24px solid rgb(47, 20, 63)",
        
        padding: "35px 15px 35px 15px",
        height: "auto",
      }}
    >
      <div className="row Flex">
        <div className="col-12 ">
          <div className="row " >
            <div className=" col-12 text_paragraph_forth" style={{height:'70px'}}>{comment}</div>
            <div className="col-12 mt- mt-sm-4">
              <div className="row">
                <div className="col-auto ">
                  <img src={Img} alt={name} />
                </div>
                <div className="col-9  col-lg-9 col-xl-8 col-xxl-8 ">
                  <div className="row">
                    <div className="ps-1 p-0 m-0 col-12 text_paragraph_forth">{name}</div>
                    <h6 className=" ps-1 col-12 p-0 m-0 text_paragraph_fifth">{email}</h6>
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
