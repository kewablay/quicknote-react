import React from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../images/delete.png";

function ListItem({ note, getNotes }) {
  const deleteNote = async () => {
    console.log("delete function triggered");
    fetch(`/api/${note.id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    getNotes();
  };

  return (
    <div className="list-item">
      <div className="card-wrapper">
        <Link to={`/${note.id}`}>
          <div className="card">
            <p className="note-title">{note.body}</p>
          </div>
        </Link>
        <span onClick={deleteNote} className="delete-btn">
          <img src={deleteIcon} alt="" />
        </span>
      </div>
    </div>
  );
}

export default ListItem;
