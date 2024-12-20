import React from "react";
import TeamVector from "../../../assets/Home/TeamVector.png";
import TeamMember from "../../../assets/Home/AugmentedTeamMember2.png";
import TeamBackground from "../../../assets/Home/TeamBackground.png";
import TeamLogo1 from "../../../assets/Home/AugmentedTeamLogo1.png";
import TeamLogo2 from "../../../assets/Home/AugmentedTeamLogo2.png";
TeamLogo1
import '../../../index.css'
import Logo from "../../../common/Logo/Logo";
const TeamCard = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="row">
          <div
            className="col-12 m-0 p-0"
            style={{
              backgroundImage: `url(${TeamMember})`,
              position: "relative",
              height: "318px",
              zIndex: "12",
            }}
          >
            <img
              src={TeamVector}
              class="img-thumbnail"
              style={{
                background: "none",
                opacity: "0.6",
                position: "absolute",
                bottom: "0px",
                zIndex: "0",
              }}
              alt="..."
            />
          </div>
        </div>
        <div className="row mt-1" style={{backgroundImage:`url(${TeamBackground})`}}>
          <div className="col-12">
            <div className="row ">
              <div className="col-12">
                <h1 className="text_second">Muh sanaullah</h1>
              </div>
            </div>
            <div className="row ">
              <div className="col-12">
                <p className="text_paragraph_secondary">
                CO- FOUNDER & PROJECT MANAGER
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row Flex">
                   <div className="col-3">
                    <Logo logo={TeamLogo1}/>
                   </div>
                   <div className="col-3">
                   <Logo logo={TeamLogo2}/>
                   </div>
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
