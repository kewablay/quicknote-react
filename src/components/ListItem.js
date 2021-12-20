import React, {useState} from "react";
import { Link } from "react-router-dom";
import deleteIcon from "../images/delete.png";
import { motion,AnimatePresence } from "framer-motion";

function ListItem({ note, getNotes}) {
  const [showNote, setShowNote] = useState(true)

  const deleteNote = async () => {
    setShowNote(false)
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
      return title.slice(0, 45) + "...";
    }
    return title;
  };

  const getDate = (note) => {
    return new Date(note.updated).toLocaleDateString();
  };


  const cardVariant = {
    hidden: {
      opacity: 0,
      scale: 0
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  }

  return (
    <div className="list-item">
      <div className="card-wrapper">
        <Link to={`/${note.id}`}>
        <AnimatePresence>
        {showNote && (<motion.div
            className="card"
            style={{ background: note?.color }}
            whileHover={{ scale: 1.05 }}
            variants={cardVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <p className="note-title">{getTitle(note)}</p>
          </motion.div>)}
          
        </AnimatePresence>
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
