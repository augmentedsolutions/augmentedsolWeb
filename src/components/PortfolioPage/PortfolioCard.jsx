import React from "react";
import "../../index.css";

const PortfolioCard = ({ img, text, options }) => {
  return (
    <div style={{backgroundColor: 'white'}}>
      <div>
        <img src={img} width='auto' height='320px' />
        <h1 className="heading_tertiary px-3 pt-3" style={{ color: 'black' }}>
          {text}
        </h1>
        <div className="pt-3" style={{ display: 'flex' }}>
          {options.map((e, index) => {
            return (
              <span
                key={index}
                className="border_tabs_portfolio mx-3 "
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                <p className="text_seventh px-2 py-2" style={{ color: 'black',display:'flex',justifyContent:'center',alignItems:'center' }}>
                  {e.option}
                </p>
              </span>
            );
          })}
        </div>
        <div
          className="mt-4 text_seventh"
          style={{
            height: '53px',
            background: 'linear-gradient(99.05deg, #A700F5 0.07%, #DF308D 106.32%)',
            width: "100%",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
          }}
        >
          View Details
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
