import React from "react";
import "../../../index.css";
import TeamCard from "./TeamCard";
const TeamHome = () => {
  return (
    <>
      <div className="row ">
        <div
          className="col-6 d-flex justify-content-center align-items-center"
          style={{ height: "529px" }}
        >
          <div className="row d-flex justify-content-start align-items-center">
            <div className="col-8">
              <div className="row">
                <div className="col-12">
                  <h1 className="text_primary">Augmented Team</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p className="text_paragraph">
                    Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel
                    ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem
                    urna dui vel ut feugiat ut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-5">
              <TeamCard />
            </div>
      
            <div className="col-4">
              {/* <TeamCard /> */}
            </div>
 
            <div className="col-4">
              {/* <TeamCard /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamHome;