import React from "react";
import "../../../index.css";
import TeamCard from "./TeamCard";
import TeamCarousal from "./TeamCarousal";
const TeamHome = () => {
  return (
    <>
      <div className="">
        <div
          className="row gy-4 gy-lg-0 align-items-lg-center"
          style={{ position: "relative" }}
        >
          <div className="col-12 col-lg-5 text-lg-start text-center">
            <div className="row">
             <div className="col-9">

            <div className="about-wrapper">
              <h1 className="text-white mb-5">Augmented Team</h1>
              <p className="lead text-white mb-5 ">
                Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut
                feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna
                dui vel ut feugiat ut.
              </p>
            </div>
             </div>
            </div>
          </div>
          <div className="col-12 col-lg-7 ">
            <TeamCarousal />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamHome;
