import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../index.css";
import "./Button.css";

const Button = ({
  name,
  FontStylte = "heading_sixth_11",
  FontSize,
  icon,
  Height,
  MinHeight,
  MinWidth,
  justify = "center",
}) => {
  return (
    <button
      type="button p-0"
      className="btn   AboutHomeBTN"
      style={{
        background: "var(--background_color_btn)",
        color: "white",
        width: "100%",
        height: "100%",
        fontWeight: "500",
        borderRadius:'5.63px'
      }}
    >
      <NavLink
        to={"/contact"}
        style={{ textDecoration: "none",fontWeight:"bold", color: "white",fontSize:{FontSize} }}
        // Close the menu
        className='px-3 py-2'
        
      >
        {name} <img src={icon} />
      </NavLink>
    </button>
  );
};

export default Button;
