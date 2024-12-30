import React from "react";
import "../../index.css";

const PortfolioCard = ({ img, text, options }) => {
  return (
    <div style={{}} className="PortfolioCard row m-0 p-0">
      <div className="col-12  m-0 p-0">
        <img src={img} className="PortfolioImage" width='auto'  />
        <h1 className="heading_tertiary px-3 pt-3 PortfolioText" style={{ color: 'black' }}>
          {text}
        </h1>
        <div className="pt-3 mx-3 row" >
          {options.map((e, index) => {
            return (
              <span
                key={index}
                className="PortfolioOption col-auto border_tabs_portfolio mx-2 px-2 py-3 "
                style={{height:'33px', color:'black' , display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                
                  {e.option}
                
              </span>
            );
          })}
        </div>
        <div
          className="mt-4 text_seventh "
          style={{
            height: '53px',
            background: 'linear-gradient(99.05deg, #A700F5 0.07%, #DF308D 106.32%)',
            width: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
          }}
        >
          View Details
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
