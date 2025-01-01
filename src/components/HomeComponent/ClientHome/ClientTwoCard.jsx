import React from "react";
import "../../../index.css";

const ClientTwoCard = ({ Img, comment, name, email }) => {
  return (
    <div
      className="col-12 border_radius_one"
      style={{
        
        background:
          "linear-gradient(180deg, #AA14F0 -42.59%, rgba(0, 0, 0, 0) -42.59%, #CB8DE8 -42.58%, rgba(203, 143, 232, 0.18) 4.35%, rgba(151, 60, 68, 0.055) 99.99%, rgba(199, 137, 228, 0) 100%)",
        border: "3.24px solid rgb(47, 20, 63)",
        margin: "20px 20px 20px 20px",
        padding: "35px 15px 35px 15px",
        height: "215.83px",
      }}
    >
      <div className="row Flex">
        <div className="col-12">
          <div className="row">
            <div className="col-12 text_paragraph_forth">{comment}</div>
            <div className="col-12 pt-1 pt-sm-3">
              <div className="row">
                <div className="col-3 col-sm-2 ">
                  <img src={Img} alt={name} />
                </div>
                <div className="col-9 col-sm-10">
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
