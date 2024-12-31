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
import './Footer.css'
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
              <img src={LogoImg} className="mb-4" />
              <h4 className="  mb-3">
                At the core of our company is a passion for the transformative
                power of augmented reality (AR) and virtual reality (VR).
              </h4>
              <div className="row MarginTopContentContainer footer-logo MarginContentContainer ">
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
              <h5 className=" shopping-online-heading mb-4 ">Company</h5>
              <ul className="list-unstyled mb-0 ">
                <li className="">
                  <h6 href="#!" className="shopping-online-link mb-3 footer-heading-two">
                    About Us
                  </h6>
                </li>
                <li className="">
                  <h6 href="#!" className="mb-3 shopping-online-link footer-heading-two">
                    Services
                  </h6>
                </li>
                <li className="">
                  <h6 href="#!" className="shopping-online-link mb-3 footer-heading-two">
                    Products
                  </h6>
                </li>
                <li>
                  <h6 href="#!" className="shopping-online-link mb-3 footer-heading-two">
                    Contact Us
                  </h6>
                </li>
                <li>
                  <h6 href="#!" className="shopping-online-link mb-3 footer-heading-two">
                    Privacy Policy
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className=" shopping-online-heading mb-4 ">Contact Us</h5>
              <ul className="list-unstyled mb-0">
                <li className="">
                  <h6 href="#!" className="shopping-online-link mb-3 footer-heading-two">
                    frequently asked questions
                  </h6>
                </li>
                <li className="">
                  <h6 href="#!" className="shopping-online-link mb-3 footer-heading-two">
                    delivery
                  </h6>
                </li>
                <li className="">
                  <h6 href="#!" className="shopping-online-link  mb-3 footer-heading-two">
                    pricing
                  </h6>
                </li>
                <li>
                  <h6 href="#!" className="shopping-online-link mb-3 footer-heading-two" >
                    where we deliver?
                  </h6>
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
          // backgroundColor:"red"
        }}
      ></div>

      <div
        className="gradient_radial"
        style={{
          height: "950px",
          width: "950px",
          position: "absolute",
          top: "-200px",
          left: "-400px",
          // backgroundColor:"red"
        }}
      ></div>
    </div>
  );
};

export default Footer;
