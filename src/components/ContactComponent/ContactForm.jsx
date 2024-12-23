import React from "react";
import Button from "../../common/Button/Button";
import "../../index.css";

import ContactLogoright1 from "../../assets/Home/ContactLogoright1.png";
import ContactLogoright2 from "../../assets/Home/ContactLogoright2.png";
import ContactLogoright3 from "../../assets/Home/ContactLogoright3.png";
import ContactLogoleft1 from "../../assets/Home/ContactLogoleft1.png";
import ContactLogoleft2 from "../../assets/Home/ContactLogoleft2.png";
import ContactLogoleft3 from "../../assets/Home/ContactLogoleft3.png";
import Logo from "../../common/Logo/Logo";
const ContactForm = () => {
  return (
    <div className="row">
      <div className="col-12 mt-3">
        <h1 className="text_sixth ">Contact Fom</h1>
      </div>
      <div className="col-12 mt-4">
        <div className="row">
          <div className="col-5">
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  style={{
                    width: "100%",
                    height: "62px",
                    border: "1px solid white",
                    borderRadius: "5px",
                  }}
                  className="backgroundCOntactForm"
                />
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  style={{
                    width: "100%",
                    height: "62px",
                    border: "1px solid white",
                    borderRadius: "5px",
                  }}
                  className="backgroundCOntactForm"
                />
              </div>
            </div>
          </div>
          <div className="col-2">
            <Button />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-4">
            <div className="row">
              <div className="col-2">
                <Logo logo={ContactLogoright1} />
              </div>
              <div className="col-auto">
                <h5 className="text_fifth">augmentedsol@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-2">
                <Logo logo={ContactLogoright2} />
              </div>
              <div className="col-auto">
                <h5 className="text_fifth">+92 308 4846218</h5>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="row">

            <div className="col-2">
              <Logo logo={ContactLogoright3} />
            </div>
            <div className="col-auto">
              <span className="text_fifth">
                337 G Block Rehman Pura Muslim.
              </span>
            </div>

            </div>
          </div>
        </div>
      </div>
      <div className="col-12 mt-5">
        <h1 className="text_sixth ">Social Links</h1>
      </div>
      <div className="col-12">
        <div className="row " style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
          <div className="col-1" style={{display:'flex' ,justifyContent:'center',alignItems:'center'}} >
            <Logo logo={ContactLogoleft1}  />
          </div>
          <div className="col-1" style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
            <Logo logo={ContactLogoleft2} />
          </div>
          <div className="col-1 " style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
            <Logo logo={ContactLogoleft3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
