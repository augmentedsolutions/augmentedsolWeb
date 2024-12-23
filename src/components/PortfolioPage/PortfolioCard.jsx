import React from "react";
import "../../index.css"
const PortfolioCard = ({ img, text, options }) => {
  return (
    <div className="col-4">
      <div className="row">
        <div className="col-11">
          <div className="row">
            <div className="col-12 ">
              <img
                src={img}
                style={{
                  width: "100%",
                  height: "430.22px",
                  gap: "0px",
                  opacity: "0px",
                }}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-12 text_forth" >{text}</div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="row">
                {options.map((e) => {
                  return (
                    
                      <div className="col-auto border_radius_three px-1 py-2 text_paragraph_tevelth">{e.option}</div>
                    
                  );
                })}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <button />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
