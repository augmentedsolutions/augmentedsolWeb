import React from "react";
import TeamVector from "../../../assets/Home/TeamVector.png";
import TeamImage from "../../../assets/Home/TeamImage.png";
// import TeamBackground from "../../../assets/Home/TeamBackground.png";
import TeamLogo1 from "../../../assets/Home/AugmentedTeamLogo1.png";
import TeamLogo2 from "../../../assets/Home/AugmentedTeamLogo2.png";


import "../../../index.css";
import Logo from "../../../common/Logo/Logo";
const TeamCard = () => {
  return (
    <div
      className="row "
      style={{
        
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",

      }}
    >
      <div className="card-main col-12">
        <div className="card-photo "
         
        >
          <img
            src={TeamImage}
             width='auto'
             height='370px'        
          />
        </div>
        <div className="col-12 backgorundTeamCard my-3 py-3"  >
          <div className="row">
            <div className="col-12">

           <h1 className="text_second  text-center" style={{color:'white'}}>
           Muh sanaullah
           </h1>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
           <p className="text_paragraph_secondary text-center">
           CO- FOUNDER & PROJECT MANAGER
           </p>

            </div>
          </div>
           <div className="row" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className="col-4">
              <div className="row " style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
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
