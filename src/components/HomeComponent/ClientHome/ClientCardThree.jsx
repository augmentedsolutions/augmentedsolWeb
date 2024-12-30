import React from "react";
import ClientIcon from "../../../assets/Home/ClientIcon.png";

import "../../../index.css";
import Button from "../../../common/Button/Button";

const ClientCardThree = () => {
  return (
    <div className="row">
      <div className="col-12 col-sm-10 col-lg-6">
        <div className="row">
          <div className="col-12">
            <div className="row">
              
            <div class="row">
      <div class="col text-start mb-1 md-sm-5 md-md-5 mb-lg-5">
         <h1 class="display-4 font-weight-bolder">Explore product in new way
         <img className="ms-5" src={ClientIcon} /></h1>
  <p class="lead"> We specialize in creating visual identities for products and
  branda in your company.</p>
      </div>
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
                        <div className="col-4 text-start">

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
