import React, { useState } from "react";
import { Link } from "react-router-dom";
import addButton from "../images/add-button.png";

function Sidebar() {
  const colors = ["#BAE1FF", "#BAFFC9", "#C4C4C4", "#FFB3BA", "#FFFFBA"];


  const passColor = (e)=> {
    let color = e.target.style.background
    // console.log(color)
  }

  return (
    <div className="side-bar">
      <div className="add-note">
        <img src={addButton} alt="Add" />
        <div className="color-list">
          {colors.map((color) => (
            <Link to={{pathname: '/new', state: {color: color}}}>
              <li className="color" style={{ background: color }} onClick={passColor}></li>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
