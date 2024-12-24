import React from "react";
import "../../index.css"
const PortfolioCard = ({ img, text, options }) => {
  return (
      <div>
        <div >
            <img src={img} height='400px' width='500px'/ >
              <h1 className="text_forth px-3 pt-3">
                {text}
              </h1>
              <div className=" pt-3 " style={{display:'flex'}}>

              {options.map((e)=>{
                return(
                  <span className="border_tabs_portfolio mx-3 px-2 py-1" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                   <p className="text_seventh  " style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                     {e.option}  
                   </p>
                   </span>
              )
              })}
              </div>
              <div className="mt-4 text_seventh" style={{height:'53px',background: 'linear-gradient(99.05deg, #A700F5 0.07%, #DF308D 106.32%)',
 width:"100%",display:'flex',justifyContent:'center',alignItems:'center'}}>
                View Details
              </div>
        </div>
      </div>
  );
};

export default PortfolioCard;
