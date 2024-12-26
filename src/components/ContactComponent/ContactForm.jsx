import React from "react";
import Button from "../../common/Button/Button";
import "../../index.css";

import ContactLogoright1 from "../../assets/Home/ContactLogoRight1.png";
import ContactLogoright2 from "../../assets/Home/ContactLogoRight2.png";
import ContactLogoright3 from "../../assets/Home/ContactLogoRight3.png";
import ContactLogoleft1 from "../../assets/Home/ContactLogoleft1.png";
import ContactLogoleft2 from "../../assets/Home/ContactLogoleft2.png";
import ContactLogoleft3 from "../../assets/Home/ContactLogoleft3.png";
import Logo from "../../common/Logo/Logo";
const ContactForm = () => {
  return (
    <div className="row PaddingContainer">
      <div className="col-12 MarginInnerBottomContainer">
        <h1 className="heading_tertiary ">Contact Fom</h1>
      </div>
      <div className="col-12">
        <div className="row ">
          <div className="col-lg-5">
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  style={{
                    width: "100%",
                    minHeight: "62px",
                    border: "1px solid white",
                    borderRadius: "5px",
                  }}
                  className="backgroundCOntactForm"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5 MarginTopContainer">
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  style={{
                    width: "100%",
                    minHeight: "62px",
                    border: "1px solid white",
                    borderRadius: "5px",
                  }}
                  className="backgroundCOntactForm"
                />
              </div>
            </div>
          </div>
          <div className="col-4 col-lg-2 MarginTopContainer">
            <Button name='Submit' />
          </div>
        </div>

        <div className="row MarginTopContentContainer ">
          <div className="col-lg-4">
            <div className="row" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <div className="col-auto">
                <Logo logo={ContactLogoright1} />
              </div>
              <div className="col-auto text_fifth text-wrap">
                augmentedsol@gmail.com
              </div>
            </div>
          </div>
          <div className="col-lg-4 ">
            <div className="row style={{display:'flex',justifyContent:'center',alignItems:'center'}}">
              <div className="col-auto">
                <Logo logo={ContactLogoright2} />
              </div>
              
              <div className="col-auto text_fifth text-wrap">
              +92 308 4846218
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row style={{display:'flex',justifyContent:'center',alignItems:'center'}}">

            <div className="col-auto">
              <Logo logo={ContactLogoright3} />
            </div>
            
            <div className="col-auto text_fifth text-wrap">
            337 G Block Rehman Pura Muslim.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 MarginInnerContainer ">
        <h1 className="heading_tertiary ">Social Links</h1>
      </div>
      <div className="col-12">
        <div className="row " style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
          <div className="col-3" style={{display:'flex' ,justifyContent:'center',alignItems:'center'}} >
            <Logo logo={ContactLogoleft1}  />
          </div>
          <div className="col-3" style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
            <Logo logo={ContactLogoleft2} />
          </div>
          <div className="col-3 " style={{display:'flex' ,justifyContent:'center',alignItems:'center'}}>
            <Logo logo={ContactLogoleft3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
