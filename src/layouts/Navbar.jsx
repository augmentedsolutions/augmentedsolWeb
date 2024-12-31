import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "../assets/Home/Logo.png";
import "./Navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


const Navbarr = () => {
  return (
    <div style={{position:'relative'}}>
    <div className="Container">
      {/* Navbar */}
      <Navbar
        expand="lg"
        className="navbar-scroll shadow-0 border-dark"
        style={{ backgroundColor: "transparent" }}
      >
        {/* Brand Logo */}
        <Navbar.Brand href="#!">
          <img
            src={logo}
            alt="Logo"
            className="NavbarLogo"
            // style={{ height: "100%", width: "auto" }}
          />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="navbar-content" className="text-white">
          <span className="navbar-toggler-icon">
            <i className="fs-1 fas fa-bars"></i>
          </span>
        </Navbar.Toggle>

        {/* Navbar Content */}
        <Navbar.Collapse id="navbar-content">
          <Nav className="mx-auto">
            {/* Nav Links */}
            <NavLink
              as={NavLink}
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-active  px-md-1 px-lg-2 px-xl-3 px-xxl-5"
                  : "nav-link nav-link-inactive  px-md-1 px-lg-2 px-xl-3 px-xxl-5"
              }
              style={{color:'white' ,height:'auto'}}
            >
              <h5>

              Home
              </h5>
            </NavLink>
            <NavLink
              to={"/service"}
              as={NavLink}
              style={{color:'white ' ,height:'auto'}}
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-active  px-md-1 px-lg-2 px-xl-3 px-xxl-5"
                  : "nav-link nav-link-inactive  px-md-1 px-lg-2 px-xl-3 px-xxl-5"
              }
            >
              
             <h5> Services</h5>
            </NavLink>
            <NavLink
              to={"/portfolio"}
              as={NavLink}
              style={{color:'white' ,height:'auto'}}
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-active  px-md-1 px-lg-2 px-xl-3 px-xxl-5"
                  : "nav-link nav-link-inactive  px-md-1 px-lg-2 px-xl-3 px-xxl-5"
              }
            >
              <h5>

              Portfolio
              </h5>
            </NavLink>
            <NavLink
              to={"/about"}
              as={NavLink}
              style={{color:'white' ,height:'auto'}}
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-active  px-lg-2 px-xl-3 px-xxl-5"
                  : "nav-link nav-link-inactive  px-lg-2 px-xl-3 px-xxl-5"
              }
            >
              <h5>

              About
              </h5>
            </NavLink>
          </Nav>

          {/* Contact Button */}
          <button
            type="button"
            className="btn ms-3 "
            as={NavLink}
            style={{
              background: "var(--background_color_btn)",
              color: "white",
              height:'70px'
              
            }}
          >
            <NavLink
              to={"/contact"}
              as={NavLink}
              className=''
              style={{ textDecoration: "none", color: "white" }}
            >
           <h5>

              Contact Us
           </h5>
            </NavLink>
          </button>
        </Navbar.Collapse>
      </Navbar>

      {/* Radial Background */}
      
    </div>
    <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            bottom: "-430px",
            right: "700px",
            zIndex:'-1',
            

          }}
        ></div>
    </div>
  );
};

export default Navbarr;
