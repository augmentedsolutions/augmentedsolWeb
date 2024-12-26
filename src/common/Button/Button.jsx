import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
// import './Button.css'
const Button = ({ name ,Height = "62px",FontStylte='heading_sixth_11',justify='center' }) => {
  return (
    <div className="row p-0 m-0 " style={{display:'flex',justifyContent:'center'}}>
      
        <Link
          className={`col-12 btn_text   ${FontStylte}`}
          to={"/contact"}
          style={{
            height:Height,
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
  );
};

export default Button;
