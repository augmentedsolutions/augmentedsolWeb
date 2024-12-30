import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "../assets/Home/Logo.png";
const Navbar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log(`visible= ${visible}`);
    const handleResize = () => {
      const isWideScreen = window.innerWidth >= 1200;
      if (visible && isWideScreen) {
        setVisible(false);
      }
      console.log(isWideScreen);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup to avoid memory leaks
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [visible]);

  const handleMenuClose = () => {
    if (window.innerWidth < 1200) {
      setVisible(false);
    }
  };

  return (
    <div className="Container">
      <div className="Navbar row " style={{ position: "relative" }}>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-scroll  shadow-0  border-dark">
          <div className="container-fluid">
            <a className="navbar-brand NavbarLogo" style={{}} href="#!">
              <img
                src={logo}
                // className="img-fluid"
                height="100%"
                width="auto"
                alt="..."
              />
            </a>
            
            <button
              class="navbar-toggler"
              style={{ color: "white" }}
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item px-lg-2 px-xl-4 px-md-3">
                  <NavLink
                    to={"/"}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link nav-link-active"
                        : "nav-link nav-link-inactive"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item px-lg-2 px-xl-4 px-md-3">
                  <NavLink
                    to={"/service"}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link nav-link-active"
                        : "nav-link nav-link-inactive"
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item px-lg-2 px-xl-4 px-md-3">
                  <NavLink
                    to={"/portfolio"}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link nav-link-active"
                        : "nav-link nav-link-inactive"
                    }
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="nav-item px-lg-2 px-xl-4 px-md-3">
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link nav-link-active"
                        : "nav-link nav-link-inactive"
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
              <button
                type="button"
                className="btn  ms-3"
                style={{
                  background: "var(--background_color_btn)",
                  color: "white",
                  height: "62px",
                  width: "152px",
                }}
              >
                 <NavLink
                    to={"/contact"}
                     style={{textDecoration:'none',color:'white'}}
                  >
                    Contact Us
                  </NavLink>
              </button>
            </div>
          </div>
        </nav>

        {/* Radial Background */}
        <div className="gradient_radial"></div>
      </div>
    </div>
  );
};

export default Navbar;
