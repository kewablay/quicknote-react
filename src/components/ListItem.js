import React from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../images/delete.png";


function ListItem({ note , getNotes}) {

  const deleteNote = async () => {
    console.log('delete function triggered')
    fetch(`/api/${note.id}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    getNotes()
  };


  return (
    <div className="list-item">
      <Link to={`/${note.id}`}>
        <h3 className="card">{note.body}</h3>
      </Link>
      <span onClick={deleteNote} className="delete-btn">
        <img src={deleteIcon} alt="" />
      </span>
    </div>
  );
}

export default ListItem;
