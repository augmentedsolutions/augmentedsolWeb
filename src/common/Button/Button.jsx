import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
// import './Button.css'
const Button = ({ name }) => {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-8">
        <Link
          className=" btn_text"
          to={"/contact"}
          style={{
            textDecoration: "none",
            color: "white",
            height: "62px",
            background: "var(--background_color_btn)",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width:'95%',
            minWidth:'100px'
          }}
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default Button;
