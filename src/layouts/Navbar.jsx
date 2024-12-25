import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Home/Logo.png";
import Button from "../common/Button/Button.jsx";
import "../index.css";

const Navbar = () => {
  const location = useLocation(); // Get the current route

  // Function to check if the current route matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <div className="Navbar row Container mt-2 mb-3">
      <div className="NavbarMain col-12">
        <div className="row d-flex justify-content-between align-items-center">
          <div className="col-2">
            <img
              src={Logo}
              className="img-fluid"
              height="100%"
              width="217px"
              alt="..."
            />
          </div>
          <div className="col-md-7 col-lg-6">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-auto">
                <Link
                  to={"/"}
                  className={`text_fifth ${isActive("/") ? "active" : ""}`}
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </div>
              <div className="col-auto">
                <Link
                  to={"/service"}
                  className={`text_fifth ${isActive("/service") ? "active" : ""}`}
                  style={{ textDecoration: "none" }}
                >
                  Services
                </Link>
              </div>
              <div className="col-auto">
                <Link
                  to={"/portfolio"}
                  className={`text_fifth ${isActive("/portfolio") ? "active" : ""}`}
                  style={{ textDecoration: "none" }}
                >
                  Portfolio
                </Link>
              </div>
              <div className="col-auto">
                <Link
                  to={"/about"}
                  className={`text_fifth ${isActive("/about") ? "active" : ""}`}
                  style={{ textDecoration: "none" }}
                >
                  About Us
                </Link>
              </div>
            </div>
          </div>
          <div className="col-2 text-end">
            <Button name="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
