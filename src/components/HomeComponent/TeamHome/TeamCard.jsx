import React from "react";
import TeamVector from "../../../assets/Home/TeamVector.png";
import TeamImage from "../../../assets/Home/TeamImage.png";
// import TeamBackground from "../../../assets/Home/TeamBackground.png";
import TeamLogo1 from "../../../assets/Home/AugmentedTeamLogo1.png";
import TeamLogo2 from "../../../assets/Home/AugmentedTeamLogo2.png";

import "../../../index.css";
import Logo from "../../../common/Logo/Logo";
import './TeamCard.css'
const TeamCard = () => {
  return (
    <div className="col-11  col-md-7  col-lg-12 m-0 p-0">
      <div className="card" style={{backgroundColor:'none'}}>
        <img
          src={TeamImage}
          className="card-img-top"
          alt="Sunset Over the Sea"
        />
        <div
          className="card-body backgorundTeamCard  text-center my-3 py-lg-2 py-3"
          style={{
            border: "3.24px solid rgb(47, 20, 63)",
            
          }}
        >
          <h2 className="card-text mb-1 mb-sm-2 mb-lg-4  " >Sanaullah</h2>
          <h3 className="card-text text-white TeamCardText2 mb-1 mb-sm-2 mb-lg-4" >CO- FOUNDER & PROJECT MANAGER</h3>
          <div
            className="row"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              
            }}
          >
            <div className="col-7 col-sm-5 col-md-5 col-lg-9 col-xl-7 col-xxl-6">
              <div
                className="row "
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="col-auto">
                  <Logo logo={TeamLogo1} />
                </div>
                <div className="col-auto">
                  <Logo logo={TeamLogo2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
