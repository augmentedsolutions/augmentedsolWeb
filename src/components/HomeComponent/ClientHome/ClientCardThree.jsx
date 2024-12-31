import React from "react";
import ClientIcon from "../../../assets/Home/ClientIcon.png";

import "../../../index.css";
import Button from "../../../common/Button/Button";
import "./ClientCardThree.css";
import ClientVectorImage2 from '../../../assets/Home/ClientVectorImage2.png'
const ClientCardThree = () => {
  return (
    <div className="row my-5">
      <div className="col-12 col-sm-10 col-xl-6 col-xxl-6">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div class="row">
                <div class="text-white col-xl-12 col-xxl-9 text-start mb-1  ">
                  <h1 class=" font-weight-bolder MarginBottomContentContainer">
                    Explore product in new way{" "}
                    <img className="" src={ClientIcon} />
                  </h1>
                  <p class="text-white lead">
                    {" "}
                    We specialize in creating visual identities for products and
                    brands in your company.{" "}
                  </p>
                </div>
              </div>

              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-7">
                        <input
                          type="text"
                          className="background_Input_Client Client-Card-Three-Input"
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="col-4 col-sm-3 col-md-3  col-lg-3 col-xl-4 col-xxl-3">
                        <Button name="Start" icon={ ClientVectorImage2} />
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
