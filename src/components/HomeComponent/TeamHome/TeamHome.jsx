import React from "react";
import "../../../index.css";
import TeamCard from "./TeamCard";
import TeamCarousal from "./TeamCarousal";
const TeamHome = () => {
  return (
    <>
      <div className="row  PaddingContainer">
        <div
          className="text-center text-lg-start MarginContainer col-lg-5 d-flex justify-content-center align-items-center"
          style={{ position:'relative' }}
        >
          <div className="row d-flex justify-content-start align-items-center">
            <div className="col-lg-10">
              <div className="row MarginBottomText1">
                <div className="col-12">
                  <h1 className="heading_primary">Augmented Team</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text_primary">
                    Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel
                    ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem
                    urna dui vel ut feugiat ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 " style={{}}>
         <TeamCarousal/>
        </div>
      </div>
    </>
  );
};

export default TeamHome;
