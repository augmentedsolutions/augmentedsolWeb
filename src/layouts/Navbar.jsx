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
            style={{ height: "100%", width: "auto" }}
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
                  ? "nav-link nav-link-active px-3"
                  : "nav-link nav-link-inactive px-3"
              }
              style={{color:'white'}}
            >
              Home
            </NavLink>
            <NavLink
              to={"/service"}
              as={NavLink}
              style={{color:'white'}}
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-active px-3"
                  : "nav-link nav-link-inactive px-3"
              }
            >
              Services
            </NavLink>
            <NavLink
              to={"/portfolio"}
              as={NavLink}
              style={{color:'white'}}
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-active px-3"
                  : "nav-link nav-link-inactive px-3"
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to={"/about"}
              as={NavLink}
              style={{color:'white'}}
              className={({ isActive }) =>
                isActive
                  ? "nav-link nav-link-active px-3"
                  : "nav-link nav-link-inactive px-3"
              }
            >
              About
            </NavLink>
          </Nav>

          {/* Contact Button */}
          <button
            type="button"
            className="btn ms-3"
            as={NavLink}
            style={{
              background: "var(--background_color_btn)",
              color: "white",
              height: "62px",
              width: "152px",
            }}
          >
            <NavLink
              to={"/contact"}
              as={NavLink}
              style={{ textDecoration: "none", color: "white" }}
            >
              Contact Us
            </NavLink>
          </button>
        </Navbar.Collapse>
      </Navbar>

      {/* Radial Background */}
      <div className="gradient_radial"></div>
    </div>
  );
};

export default Navbarr;
