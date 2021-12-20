import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {motion, AnimatePresence} from 'framer-motion'

function NotePage({ match, history }) {
  const { id } = useParams();
  const noteId = match.params.id;
  const [note, setNote] = useState(null);
  const [showModal, setShowModal] = useState(false)
  const location = useLocation();
  // const { color } = location.state

  useEffect(() => {
    getNote(noteId);
  }, [noteId]);

  const getColor = (note) => {
    if (noteId === "new") {
      console.log("id is new");
      const { color } = location.state;
      console.log(color);
      return color;
    } else if (noteId !== "new") {
      const color = note?.color;
      console.log("color in api:", color);
      return color;
    }
  };

  getColor(note);

  const getNote = async () => {
    if (noteId === "new") return;
    const res = await fetch(`/api/${id}/`);
    const data = await res.json();
    setNote(data);
  };

  const createNote = async () => {
    fetch(`/api/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
    console.log("create note triggered");
    console.log(note);
  };

  const updateNote = async () => {
    console.log("update note triggered");
    fetch(`/api/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const handleSubmit = () => {
    console.log("about to submit");
    if (noteId !== "new") {
      updateNote();
      history.push("/");
    }else if((noteId === "new") & (note === null)){
      setShowModal(true)
      console.log("Cannot save an empty note.")
    }
    else if ((noteId === "new") & (note.body !== null)) {
      createNote();
      history.push("/");
    }
    
  };

  const textareaVariant = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1, 
    }
  }

  const modalVariant = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 100,
      transition: {
        delay: .5,
      }
    }
  }

  return (
    <div className="note-body">
      {showModal && (<motion.div className="backdrop" initial={{opacity: 0}} animate={{opacity: .4}} transition={{ delay: .2}}>
        <motion.div className="modal"
        variants={modalVariant}
        initial="hidden"
        animate="visible"
        >
          <p> You cannot save an empty note</p>
          <button onClick={()=> setShowModal(false)}>Okay</button>
        </motion.div>
      </motion.div>)}

      <div className="note-box">
        {/* <motion.div className="title-bar" initial="hidden" animate="visible"></motion.div> */}
        <AnimatePresence>
          <motion.textarea
            defaultValue={note?.body}
            onChange={(e) => {
              setNote({ ...note, body: e.target.value, color: getColor(note) });
            }}
            style={{ background: getColor(note) }}
            variants={textareaVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          ></motion.textarea>
        </AnimatePresence>
        <button className="save-btn" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default NotePage;
