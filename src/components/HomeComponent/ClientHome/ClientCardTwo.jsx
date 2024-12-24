import React from "react";
import "../../../index.css";
import ClientCard from "./ClientCard";
import Client1 from "../../../assets/Home/Client1.png";
import Client2 from "../../../assets/Home/Client2.png";
import Client3 from "../../../assets/Home/Client3.png";

import ClientTwoCard from "./ClientTwoCard";
const ClientCardTwo = () => {
  return (
    <>
      <div className="row border_radius_two"  style={{display:'flex' , justifyContent:'center'}}>
        <div className="col-auto">

        <h1 className="text_paragraph_teritary">What our clients say</h1>
        </div>
      </div>
      <div className="row mt-5 " style={{display:'flex' , justifyContent:'center'}}>
        <div className="col-auto">

        <p className="text_paragraph_sixth">
          See what our customer say about us. It really matter for us. How good
          or bad we will make ir for evaluation to make EhyalLive better.
        </p>
        </div>
      </div>
      <div className="row " style={{position:'absolute', bottom:'-100px',display:'flex' , justifyContent:'center'}}>
        <div className="col-11">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-4">
                  <ClientTwoCard
                    Img={Client1}
                    comment='“I know in real-time where the money is spent,and
I don’t have to lend out the company’s credit card
anymore. What a relief!"'
                    name="Cody Fisher"
                    email="deanna.curtis@example.com"
                  />
                </div>
                <div className="col-4">
                  <ClientTwoCard
                    Img={Client2}
                    comment='“VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap”'
                    name="Kathryn Murphy"
                    email="alma.lawson@example.com"
                  />
                </div>
                <div className="col-4">
                  <ClientTwoCard
                    Img={Client3}
                    comment='“I can actually see the improvement in the graphics, not having the external sensors is a big plus”'
                    name="Eleanor Pena"
                    email="michelle.rivera@example.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientCardTwo;
