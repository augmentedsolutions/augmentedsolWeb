import React from "react";
import ClientCardOne from "./ClientCardOne";
import ClientCardTwo from "./ClientCardTwo";
import ClientCardThree from "./ClientCardThree";
import "../../../index.css";
import bgImage from '../../../assets/Home/ClientBackgornd.png'
import './ClientHome.css'

const ClientHome = () => {
  return (
    <>
      <div className="row background_gradient_one my-1 my-sm-3 my-lg-5  p-1 p-sm-3 p-lg-5  border_radius_one " style={{    border: "3.24px solid rgb(47, 20, 63)",}}>
        <div className="col-12">
          <ClientCardOne />
        </div>
      </div>
      <div className="row  my-1 my-sm-3 my-lg-5 " style={{position:'relative'}}>
       <div className="col-12 ClientTwoContainer" style={{}}>

      <div className="row background_gradient_one   border_radius_one" style={{height:'490px',border: "3.24px solid rgb(47, 20, 63)",marginBottom:'120px',justifyContent:'center'}}>
        <div className="col-12 col-md-11 Flex " style={{flexDirection:'column',    }} >
          <ClientCardTwo />
        </div>
      </div>
       </div>
      </div>
      <div className="row  my-1 my-sm-3 my-lg-5 p-1 p-sm-3 p-lg-5 background_gradient_one  border_radius_one  " style={{
      backgroundImage: `var(--background_gradient_one), url(${bgImage})`,
      backgroundSize: 'auto 100%',
    
        border: "3.24px solid rgb(47, 20, 63)",
        
    
      backgroundPosition: 'right center',
      backgroundRepeat: 'no-repeat',
      }}>
        <div className="col-12">
          <ClientCardThree />
        </div>
      </div>
    </>
  );
};

export default ClientHome;
