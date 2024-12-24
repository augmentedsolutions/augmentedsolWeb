import React from "react";
import "../../../index.css";
import ClientCard from "./ClientCard.jsx";
import ClientIMg1 from "../../../assets/Home/AugmentedClients1.png";
import ClientIMg2 from "../../../assets/Home/AugmentedClients2.png";
import ClientIMg3 from "../../../assets/Home/AugmentedClients3.png";
import ClientIMg4 from "../../../assets/Home/AugmentedClients4.png";
import ClientIMg5 from "../../../assets/Home/AugmentedClients5.png";
const ClientCardOne = () => {
  return (
    <>
      <div className=" row  ">
        <div className="col-12 text-center">
          <h1 className="text_primary">Augmented Clients</h1>
        </div>
      </div>
      <div className="row pt-3" style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
        <div className="col-auto">
          <div className="row" style={{display:'flex' ,alignItems:'center'}}>
            <ClientCard Img={ClientIMg1} />
            <ClientCard Img={ClientIMg2} />
            <ClientCard Img={ClientIMg3} />
            <ClientCard Img={ClientIMg4} />
            <ClientCard Img={ClientIMg5} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientCardOne;
