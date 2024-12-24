import React from "react";
import '../../index.css'
const ServiceCard = ({ img, text, paragraph }) => {
  return (
    <div className="col-5 col-lg-4  mb-lg-5">
      <div className="row " style={{display:"flex",
            alignItems:'end',
            justifyContent:'center'}}>
        <div
          className="col-11"
          style={{
            border: '0.93px solid rgba(228, 229, 231, 0.7)',
            height: "580px",
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display:"flex",
            minWidth:'380px',
            alignItems:'end',
            justifyContent:'center'
          }}
        >
          <div className="row backgroundServiceCard">
            <div className="col-12">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-12 text-center">
                      <h1 className="text_forth">{text}</h1>
                    </div>
                    <div className="col-12 text-center">
                      <p className="text_paragraph_tenth">{paragraph}</p>
                    </div>
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

export default ServiceCard;
