import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Home/Logo.png";
import Button from "../common/Button/Button.jsx";
import '../index.css'
const Navbar = () => {
  return (
    <div className="Navbar row Container mt-2 mb-3" style={{ }}>
      <div className="NavbarMain col-12">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-2">
            
             <img src={Logo} class="img-fluid" height='100%' width='217px' alt="..."></img>
          </div>
          <div className="col-md-7 col-lg-6 ">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-auto">
                <Link
                  to={"/"}
                  className="text_secondary"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Home
                </Link>
              </div>
              <div className="col-auto">
                <Link
                  to={"/service"}
                  className="text_secondary"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Services
                </Link>
              </div>
              <div className="col-auto">
                <Link
                  className="text_secondary"
                  to={"/portfolio"}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Portfolio
                </Link>
              </div>
              <div
                className="col-auto"

                style={{ textDecoration: "none", color: "white" }}
              >
                <Link
                  to={"/about"}
                  className="text_secondary"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2 text-end" >
            <Button name="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
