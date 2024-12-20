import React from "react";
import ClientCardOne from "./ClientCardOne";
import ClientCardTwo from "./ClientCardTwo";
import ClientCardThree from "./ClientCardThree";
import "../../../index.css";

const ClientHome = () => {
  return (
    <>
      <div className="row background_gradient_one my-5 py-5">
        <div className="col-12">
          <ClientCardOne />
        </div>
      </div>
      <div className="row background_gradient_one my-5 py-5">
        <div className="col-12">
          <ClientCardTwo />
        </div>
      </div>
      <div className="row background_gradient_one my-5 py-5">
        <div className="col-12">
          <ClientCardThree />
        </div>
      </div>
    </>
  );
};

export default ClientHome;
