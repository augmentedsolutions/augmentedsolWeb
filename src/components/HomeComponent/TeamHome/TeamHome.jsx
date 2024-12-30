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
            <div className="about-wrapper">
              <h2 className="">Augmented Team</h2>
              <p className="lead mb-4 mb-md-5">
                Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut
                feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna
                dui vel ut feugiat ut.
              </p>
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
