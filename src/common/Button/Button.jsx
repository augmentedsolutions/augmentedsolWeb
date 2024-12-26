import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
// import './Button.css'
const Button = ({ name }) => {
  return (
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-8 col-lg-11">
        <Link
          className=" btn_text py-3 px-2"
          to={"/contact"}
          style={{
            textDecoration: "none",
            color: "white",
            // height: '3.875rem',
            background: "var(--background_color_btn)",
            textAlign: "center",
            display: "flex",
            borderRadius:'7.14px',
            justifyContent: "center",
            alignItems: "center",
            // width:'95%',
          }}
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default Button;
