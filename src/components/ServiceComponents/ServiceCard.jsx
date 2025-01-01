import React from "react";
import "../../index.css";
import "./ServiceCard.css";
const ServiceCard = ({ img, text, paragraph }) => {
  return (
    <div className="col-12 col-sm-10  col-lg-5 col-xl-4 mb-4  ">
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="col-11">
          <div
            className="row "
            style={{
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <div
              className="card p-0 m-0 ServiceCardHome-img text-dark card-has-bg click-col"
              style={{
                // border: '0.93px solid rgba(228, 229, 231, 0.7)',
                // height: "480px",
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                // display:"flex",
                // minWidth:'250px',

                display: "flex",
                alignItems: "end",
                justifyContent: "end",
              }}
            >
              <div class="card-footer p-1 p-sm-2 p-lg-3 backgroundServiceCard ">
                <div class="media p-0 m-0">
                  <div class="media-body p-0 m-0">
                    <h2 class="  d-block  " style={{}}>
                      {text}
                    </h2>
                    <p className="lead ServiceTabText2" style={{}}>
                      {paragraph}
                    </p>
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
