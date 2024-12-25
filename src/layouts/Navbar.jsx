import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Home/Logo.png";
import Button from "../common/Button/Button.jsx";
import "../index.css";

const Navbar = () => {
  const location = useLocation(); // Get the current route
const [active ,setActive]=useState('')

useEffect(()=>{

},[active])
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
                <NavLink
                  to={"/"}
                  style={({ isActive }) => ({
                    display: 'inline-block', // Ensure the text takes up space for styling
                    position: 'relative', // For positioning the custom underline
                    color: isActive
                      ? 'transparent' // Set the text color to transparent for gradient
                      : 'white', // Default color
                    textDecoration: 'none', // Disable the default underline
                    background: isActive
                      ? 'linear-gradient(99.05deg, #A700F5 0.07%, #DF308D 106.32%)' // Gradient when active
                      : 'none',
                    backgroundClip: isActive ? 'text' : 'none', // Apply gradient to text
                    WebkitBackgroundClip: isActive ? 'text' : 'none', // Webkit support for gradient text
                    fontWeight: isActive ? 'bold' : 'normal', // Bold text when active
                    padding: '10px', // Padding for spacing
                  })}
                  
                  // style={{ textDecoration: "none" }}
                >
                  Home
                </NavLink>
              </div>
              <div className="col-auto">
                <NavLink
                  to={"/service"}
                  
                  
                   style={({ isActive }) => ({
            display: 'inline-block', // Ensure the text takes up space for styling
            position: 'relative', // For positioning the custom underline
            color: isActive
              ? 'transparent' // Set the text color to transparent for gradient
              : 'white', // Default color
            textDecoration: 'none', // Disable the default underline
            background: isActive
              ? 'linear-gradient(99.05deg, #A700F5 0.07%, #DF308D 106.32%)' // Gradient when active
              : 'none',
            backgroundClip: isActive ? 'text' : 'none', // Apply gradient to text
            WebkitBackgroundClip: isActive ? 'text' : 'none', // Webkit support for gradient text
            fontWeight: isActive ? 'bolder' : 'normal', // Bold text when active
            padding: '10px', // Padding for spacing
          })}
                >
                  Services
                </NavLink>
              </div>
              <div className="col-auto">
                <NavLink
                  to={"/portfolio"}
                  style={({ isActive }) => ({
                    display: 'inline-block', // Ensure the text takes up space for styling
                    position: 'relative', // For positioning the custom underline
                    color: isActive
                      ? 'transparent' // Set the text color to transparent for gradient
                      : 'white', // Default color
                    textDecoration: 'none', // Disable the default underline
                    background: isActive
                      ? 'linear-gradient(99.05deg, #A700F5 0.07%, #DF308D 106.32%)' // Gradient when active
                      : 'none',
                    backgroundClip: isActive ? 'text' : 'none', // Apply gradient to text
                    WebkitBackgroundClip: isActive ? 'text' : 'none', // Webkit support for gradient text
                    fontWeight: isActive ? 'bold' : 'normal', // Bold text when active
                    padding: '10px', // Padding for spacing
                  })}
                >
                  Portfolio
                </NavLink>
              </div>
              <div className="col-auto">
                <NavLink
                  to={"/about"}
                  style={({ isActive }) => ({
                    display: 'inline-block', // Ensure the text takes up space for styling
                    position: 'relative', // For positioning the custom underline
                    color: isActive
                      ? 'transparent' // Set the text color to transparent for gradient
                      : 'white', // Default color
                    textDecoration: 'none', // Disable the default underline
                    background: isActive
                      ? 'linear-gradient(99.05deg, #A700F5 0.07%, #DF308D 106.32%)' // Gradient when active
                      : 'none',
                    backgroundClip: isActive ? 'text' : 'none', // Apply gradient to text
                    WebkitBackgroundClip: isActive ? 'text' : 'none', // Webkit support for gradient text
                    fontWeight: isActive ? 'bold' : 'normal', // Bold text when active
                    padding: '10px', // Padding for spacing
                  })}
                >
                  About Us
                </NavLink>
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
