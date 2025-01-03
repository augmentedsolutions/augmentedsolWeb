import React from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";

const PortfolioCard = ({ item }) => {
  const navigate=useNavigate()
  // console.log(options)
  const handleClick=()=>{
    navigate('/portfolioDetails',{ state: {item} })
  }

  // img={item.image}
  // text={item.projectName }
  // options={item.services}
  // aria-label={`Portfolio card showcasing ${item.text}`}
  // loading="lazy"
  return (
    <div style={{}} className="PortfolioCard row m-0 p-0">
      <div className="col-12  m-0 p-0">
        <img src={item.image} className="PortfolioImage" width='100%'  />
        <h3 className=" px-3 pt-3 PortfolioText" style={{ color: 'black' ,height:'85px',overflow:'hidden'}}>
        {item.projectName }
        </h3>
        <div className="pt-3 mx-3 row" >
          {item.services.map((e, index) => {
            return (
              <span
                key={index}
                className="PortfolioOption col-auto border_tabs_portfolio mx-2 px-2 py-3 "
                style={{height:'33px', color:'black' , display: 'flex', justifyContent: 'center', alignItems: 'center' }}
              >
                
                  {e}
                
              </span>
            );
          })}
        </div>
        <div
          className="mt-4 text_seventh "
          onClick={handleClick}
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
