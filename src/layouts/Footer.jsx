import React from "react";
import Logo from "../common/Logo/Logo";
import "../index.css";

import LogoImg from "../assets/Home/Logo.png";
import ContactLogoleft1 from "../assets/Home/ContactLogoleft1.png";
import ContactLogoleft2 from "../assets/Home/ContactLogoleft2.png";
import ContactLogoleft3 from "../assets/Home/ContactLogoleft3.png";
import ContactLogoright1 from "../assets/Home/ContactLogoRight1.png";
import ContactLogoright2 from "../assets/Home/ContactLogoRight2.png";
import ContactLogoright3 from "../assets/Home/ContactLogoRight3.png";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div
      className="row Container MarginTopContainer "
      style={{ position: "relative" }}
    >
      <footer style={{}}>
        <div className=" p-4">
          <div className="row text-white">
            <div className="col-lg-6  col-md-12 ">
              <img src={LogoImg} className="mb-4  mb-lg-5" />
              <div className="row">
                  <div className="col-12 col-xl-10 col-xxl-9">

              <h5 className="   mb-4 mb-lg-5 ">
                At the core of our company is a passion for the transformative
                power of augmented reality (AR) and virtual reality (VR).
              </h5>
                  </div>
              </div>
              <div className="row mb-4 footer-logo MarginContentContainer ">
                <div className="col-auto">
                  <Logo logo={ContactLogoleft1} />
                </div>
                <div className="col-auto">
                  <Logo logo={ContactLogoleft2} />
                </div>
                <div className="col-auto">
                  <Logo logo={ContactLogoleft3} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h3 className=" shopping-online-heading mb-4 ">Company</h3>
              <ul className="list-unstyled mb-0 ">
                <li className="">
                  <h6
                    href="#!"
                    className="shopping-online-link mb-3 footer-heading-two"
                  >
                    About Us
                  </h6>
                </li>
                <li className="">
                  <h6
                    href="#!"
                    className="mb-3 shopping-online-link footer-heading-two"
                  >
                    Services
                  </h6>
                </li>
                <li className="">
                  <h6
                    href="#!"
                    className="shopping-online-link mb-3 footer-heading-two"
                  >
                    Products
                  </h6>
                </li>
                <li>
                  <h6
                    href="#!"
                    className="shopping-online-link mb-3 footer-heading-two"
                  >
                    Contact Us
                  </h6>
                </li>
                <li>
                  <h6
                    href="#!"
                    className="shopping-online-link mb-3 footer-heading-two"
                  >
                    Privacy Policy
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h3 className=" shopping-online-heading mb-4 ">Contact Us</h3>
              <ul className="list-unstyled mb-0">
                <li className="">
                  <div className="row d-flex align-items-center mb-3">
                    <div className="col-auto">
                      <Logo logo={ContactLogoright1} />
                    </div>
                    <h6
                      className="col  text-wrap text-white"
                      style={{ wordBreak: "break-word" }}
                    >
                      {" "}
                      augmentedsol@gmail.com
                    </h6>
                  </div>
                </li>
                <li className="">
                  <div className="row d-flex align-items-center mb-3">
                    <div className="col-auto">
                      <Logo logo={ContactLogoright2} />
                    </div>
                    <h6 className="col  text-wrap text-white">
                      +92 308 4846218
                    </h6>
                  </div>
                </li>
                <li className="">
                  <div className="row d-flex align-items-center mb-3">
                    <div className="col-auto">
                      <Logo logo={ContactLogoright3} />
                    </div>
                    <h6 className="col text-white  text-wrap">
                      337 G Block Rehman Pura Muslim.
                    </h6>
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        {/* <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div> */}
      </footer>

      <div
        className="gradient_radial"
        style={{
          height: "950px",
          width: "950px",
          position: "absolute",
          top: "-200px",
          right: "-400px",
          
            zIndex:'-1'
          // backgroundColor:"red"
        }}
      ></div>

      <div
        className="gradient_radial"
        style={{
          height: "950px",
          width: "950px",
          position: "absolute",
          top: "-100px",
          left: "200px",
          
            zIndex:'-1'
          // backgroundColor:'red'
          // backgroundColor:"red"
        }}
      ></div>
    </div>
  );
};

export default Footer;
