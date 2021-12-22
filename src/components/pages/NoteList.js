import React, { useState, useEffect } from "react";
import ListItem from "../ListItem";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";
import searchImage from "../../images/search.png";
import { NewNote } from "../NewNote";

function NoteList({ toggled, setToggled }) {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  useEffect(() => {
    getNotes();
  }, []);

  // useEffect(() => {
  //   checkNoteContent(notes);
  // }, [notes]);

  const getNotes = async () => {
    const res = await fetch("/api/");
    const data = await res.json();
    // console.log(data);
    setNotes(data);
    checkNoteContent(data);
  };

  const checkNoteContent = (notes) => {
    console.log(notes)
    if (notes.length === 0) {
      console.log("is zero");
      setIsEmpty(true);
      console.log("empty is set to true");
    } else {
      setIsEmpty(false);
      console.log("not zero");
    }
  };

  const allNotes = notes.filter((note) =>
    note.body.toLowerCase().includes(searchTerm)
  );

  const toggleVariant = {
    dark: {
      x: 0,
    },
    light: {
      x: 17,
    },
  };

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className="main-container">
      <Sidebar />
      <div className="notes-list">
        {isEmpty && <NewNote />}

        <motion.div
          className="notes-container"
          animate={{ x: 5 }}
          transition={{
            type: "spring",
            mass: 0.3,
            damping: 2,
            delay: 0.2,
          }}
        >
          {allNotes.map((note) => (
            <ListItem key={note.id} note={note} getNotes={getNotes} />
          ))}
        </motion.div>
      </div>

      <div className="search-container">
        <div className="search-input">
          <img src={searchImage} alt="" className="search-img" />
          <input
            className="search-bar"
            type="text"
            placeholder="Search Notes..."
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>

        <motion.div
          className="toggle-container"
          animate={toggled ? { background: "aqua" } : { background: "grey" }}
          onClick={handleToggle}
        >
          <motion.div
            className="toggle"
            variants={toggleVariant}
            animate={toggled ? "light" : "dark"}
            onClick={handleToggle}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default NoteList;
