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
                    <div className="row ">
                      <div className="col-7">
              
                        <input
                    type="text"
                    id="formControlLg"
                    style={{
                      
                      width: "100%",
                      height: "100%" ,
                      
                      border: "1px solid white",
                      borderRadius: "5px",
                      background: 'linear-gradient(180deg, #AA14F0 -42.59%, rgba(0, 0, 0, 0) -42.59%, #CB8DE8 -42.58%, rgba(203, 143, 232, 0.18) 4.35%, rgba(151, 60, 68, 0.055) 99.99%, rgba(199, 137, 228, 0) 100%)'

                    }}
                    class="form-control form-control-lg custom-placeholder-Client-Three"
                    placeholder="Your Email"
                  />
                  
                      </div>
                      <div className="col-auto">
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
