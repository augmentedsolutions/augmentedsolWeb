import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "../assets/Home/Logo.png";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Button from "../common/Button/Button";


const Navbarr = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const closeNavbar = () => setExpanded(false);

  return (
    <div style={{ position: "relative" }}>
      <div className="Container">
        {/* Navbar */}
        <Navbar
          expand="lg"
          className="navbar-scroll shadow-0 border-dark"
          style={{ backgroundColor: "transparent" }}
          expanded={expanded}
        >
          {/* Brand Logo */}
          <Navbar.Brand href="#!">
            <img src={logo} alt="Logo" className="NavbarLogo" />
          </Navbar.Brand>

          {/* Toggle Button */}
          <Navbar.Toggle
            aria-controls="navbar-content"
            className="text-white"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon">
              <i className="fs-1 fas fa-bars"></i>
            </span>
          </Navbar.Toggle>

          {/* Navbar Content */}
          <Navbar.Collapse id="navbar-content" className="text-center">
            <Nav className="mx-auto">
              {/* Nav Links */}
              <NavLink
                to="/"
                onClick={closeNavbar}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link nav-link-active px-md-1  px-lg-2 px-xl-3 px-xxl-5 text-center"
                    : "nav-link nav-link-inactive px-md-1  px-lg-2 px-xl-3 px-xxl-5 text-center"
                }
                style={{ color: "white", height: "auto" }}
              >
                <h5>Home</h5>
              </NavLink>
              <NavLink
                to="/service"
                onClick={closeNavbar}
                style={{ color: "white", height: "auto" }}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link nav-link-active px-md-1 px-lg-2 px-xl-3 px-xxl-5 text-center"
                    : "nav-link nav-link-inactive px-md-1 px-lg-2 px-xl-3 px-xxl-5 text-center"
                }
              >
                <h5>Services</h5>
              </NavLink>
              <NavLink
                to="/portfolio"
                onClick={closeNavbar}
                style={{ color: "white", height: "auto" }}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link nav-link-active px-md-1 px-lg-2 px-xl-3 px-xxl-5 text-center"
                    : "nav-link nav-link-inactive px-md-1 px-lg-2 px-xl-3 px-xxl-5 text-center"
                }
              >
                <h5>Portfolio</h5>
              </NavLink>
              <NavLink
                to="/about"
                onClick={closeNavbar}
                style={{ color: "white", height: "auto" }}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link nav-link-active px-lg-2 px-xl-3 px-xxl-5 text-center"
                    : "nav-link nav-link-inactive  px-lg-2 px-xl-3 px-xxl-5 text-center"
                }
              >
                <h5>About</h5>
              </NavLink>
            </Nav>

            {/* Contact Button */}
            <div onClick={closeNavbar} className=" col-5 col-sm-4 col-lg-auto mx-auto mx-lg-0 " style={{   background: "var(--background_color_btn)",
                color: "white",
                borderRadius:'5.63px'}}>
                  
            <Button name='Contact Us' FontSize="30px"/>
            </div>
          </Navbar.Collapse>
        </Navbar>

        {/* Radial Background */}
        <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            bottom: "-430px",
            right: "700px",
            zIndex: "-1",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Navbarr;
