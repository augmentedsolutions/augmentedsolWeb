import React from "react";
import ClientCardOne from "./ClientCardOne";
import ClientCardTwo from "./ClientCardTwo";
import ClientCardThree from "./ClientCardThree";
import "../../../index.css";
import bgImage from '../../../assets/Home/ClientBackgornd.png'


const ClientHome = () => {
  return (
    <>
      <div className="row background_gradient_one my-5 p-5 border_radius_one PaddingContainer">
        <div className="col-12">
          <ClientCardOne />
        </div>
      </div>
      <div className="row">
       <div className="col-12 my-5" style={{position:'relative',height:'370px'}}>

      <div className="row background_gradient_one  p-5 border_radius_one" style={{height:'380px',marginBottom:'200px'}}>
        <div className="col-12 Flex " style={{flexDirection:'column'}} >
          <ClientCardTwo />
        </div>
      </div>
       </div>
      </div>
      <div className="row  my-5 background_gradient_one  p-5 border_radius_one py-5 " style={{
      backgroundImage: `var(--background_gradient_one), url(${bgImage})`,
      backgroundSize: 'auto',
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
