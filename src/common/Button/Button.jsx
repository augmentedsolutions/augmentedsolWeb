import React from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import './Button.css'
const Button = ({ name ,FontStylte='heading_sixth_11',justify='center' }) => {
  return (
    
      
        <Link
          className={` Btn-common btn_text btn btn-primary btn-lg   ${FontStylte}`}
          to={"/contact"}
          style={{
            textDecoration: "none",
            color: "white",
            // height: '3.875rem',
            background: "var(--background_color_btn)",
            width:'100%',
            
            
            
          }}
        >
          {name}
        </Link>
      
    
    
  );
};

export default Button;
