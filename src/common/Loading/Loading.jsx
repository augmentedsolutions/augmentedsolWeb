import React from "react";

const Loading = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div class="text-center">
          <div
            class="spinner-border"
            style={{ color: "white", width: "4rem", height: "4rem" }}
            role="status"
          >
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
