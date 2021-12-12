import React from "react";
import { Link } from "react-router-dom";
import addButton from "../images/add-button.png";

function NewNote() {
  const colors = ["#BAE1FF", "#BAFFC9", "#C4C4C4", "#FFB3BA", "#FFFFBA"];

  return (
    <div className="add-note">
      <img src={addButton} alt="Add" />

      <div className="class-list">
        {colors.map((color) => (
          <Link to="/new">
            <li
              className="color"
              style={{ background: color }}
            ></li>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NewNote;
