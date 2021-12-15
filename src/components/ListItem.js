import React from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../images/delete.png";
import { motion } from "framer-motion";

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

  const getTitle = (note) => {
    let title = note.body.split("\n")[0];
    if (title.length > 45) {
      return title.slice(0, 45);
    }
    return title;
  };

  const getDate = (note) => {
    return new Date(note.updated).toLocaleDateString();
  };

  return (
    <div className="list-item">
      <div className="card-wrapper">
        <Link to={`/${note.id}`}>
          <motion.div
            className="card"
            style={{ background: note?.color }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="note-title">{getTitle(note)}</p>
          </motion.div>
        </Link>
        <span className="time-stamp">{getDate(note)}</span>
        <motion.span
          onClick={deleteNote}
          className="delete-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={deleteIcon} alt="" />
        </motion.span>
      </div>
    </div>
  );
}

export default ListItem;
