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
      className="card "
      style={{
        
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",

      }}
    >
      <div className="card-main">
        <div className="card-photo"
         
        >
          <img
            src={TeamImage}
        
          />
        </div>
        <div className="card-description backgorundTeamCard mt-2" style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}} >
           <h1 className="text_second text-center">
           Muh sanaullah
           </h1>
           <p className="text_paragraph_secondary text-center">
           CO- FOUNDER & PROJECT MANAGER
           </p>
           <div style={{display:'flex',justifyContent:'space-between',alignItems:'center', width:'40%'}}>
          <Logo logo={TeamLogo1} />
          <Logo logo={TeamLogo2} />
           </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
