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
const Footer = () => {
  return (
    <div
      className="row Container MarginTopContainer "
      style={{ position: "relative" }}
    >
      <footer style={{}}>
        <div className=" p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <img src={LogoImg} />
              <p>
                At the core of our company is a passion for the transformative
                power of augmented reality (AR) and virtual reality (VR).
              </p>
              <div className="row MarginTopContentContainer">
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
            <div className="col-lg-3 col-md-6 mb-5">
              <h5 className="mb-3 shopping-online-heading">Company</h5>
              <ul className="list-unstyled mb-0 ">
                <li className="mb-1">
                  <h4 href="#!" className="shopping-online-link">
                    About Us
                  </h4>
                </li>
                <li className="mb-1">
                  <h4 href="#!" className="shopping-online-link">
                    Services
                  </h4>
                </li>
                <li className="mb-1">
                  <h4 href="#!" className="shopping-online-link">
                    Products
                  </h4>
                </li>
                <li>
                  <h4 href="#!" className="shopping-online-link">
                    Contact Us
                  </h4>
                </li>
                <li>
                  <h4 href="#!" className="shopping-online-link">
                    Privacy Policy
                  </h4>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3 shopping-online-heading">Contact Us</h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <h4 href="#!" className="shopping-online-link">
                    frequently asked questions
                  </h4>
                </li>
                <li className="mb-1">
                  <h4 href="#!" className="shopping-online-link">
                    delivery
                  </h4>
                </li>
                <li className="mb-1">
                  <h4 href="#!" className="shopping-online-link">
                    pricing
                  </h4>
                </li>
                <li>
                  <h4 href="#!" className="shopping-online-link">
                    where we deliver?
                  </h4>
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
