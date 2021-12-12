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

  const getTitle= (note) => {
      let title = note.body.split('\n')[0]
      if(title.length > 45 ){
        return title.slice(0, 45)
      }
      return title  
  }

  const getDate = (note) => {
      return new Date(note.updated).toLocaleDateString()
  }


  return (
    <div className="list-item">
      <div className="card-wrapper">
        <Link to={`/${note.id}`}>
          <div className="card">
            <p className="note-title">{getTitle(note)}</p>
          </div>
        </Link>
        <span className="time-stamp">{getDate(note)}</span>
        <span onClick={deleteNote} className="delete-btn">
          <img src={deleteIcon} alt="" />
        </span>
      </div>
    </div>
  );
}

export default ListItem;

