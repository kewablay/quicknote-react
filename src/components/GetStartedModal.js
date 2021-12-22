import React from "react";
import getStartedGif from "../images/getstarted.gif";

export const GetStartedModal = ({ started, setStarted }) => {
  return (
    <div className="backdrop">
      <div className="get-started">
        <p>Add new note</p>
        <img src={getStartedGif} alt="getStarted" id="get-started-img" />
        <button className="got-it" onClick={() => setStarted(false)}>
          Got it
        </button>
      </div>
    </div>
  );
};
