import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../index.css";
import "./Button.css";

const Button = ({
  name,
  FontStylte = "heading_sixth_11",
  justify = "center",
}) => {
  return (
    <button
      type="button"
      className="btn   AboutHomeBTN"
      style={{
        background: "var(--background_color_btn)",
        color: "white",

        fontWeight: "500",
      }}
    >
      <NavLink
        to={"/contact"}
        style={{ textDecoration: "none", color: "white" }}
        // Close the menu
      >
        {name}
      </NavLink>
    </button>
  );
};

export default Button;
