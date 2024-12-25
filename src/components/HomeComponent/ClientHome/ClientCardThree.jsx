import React from "react";
import ClientIcon from "../../../assets/Home/ClientIcon.png";

import "../../../index.css";
import Button from "../../../common/Button/Button";

const ClientCardThree = () => {
  return (
    <div className="row">
      <div className="col-8 col-lg-6">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-6 mt-3">
                <h1 className="heading_primary">
                  Explore product in new way
                  <img className="ms-5" src={ClientIcon} />
                </h1>
              </div>
              <div className="col-12 mt-3">
                <p className="text_primary">
                  We specialize in creating visual identities for products and
                  branda in your company.
                </p>
              </div>
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-7">

                      <input
                        type="text"
                        className="background_Input_Client"
                        style={{ height: "60px", width: "100%" }}
                        />
                        </div>
                        <div className="col-5 text-start">

                      <Button name="Start" />
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">{/* <img src={bgImage} /> */}</div>
    </div>
  );
};

export default ClientCardThree;
