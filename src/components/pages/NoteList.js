import React, { useState, useEffect } from "react";
import ListItem from "../ListItem";
import Sidebar from "../Sidebar";
import { motion } from "framer-motion";

function NoteList() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const res = await fetch("/api/");
    const data = await res.json();
    console.log(data);
    setNotes(data);
  };

  const allNotes = notes.filter((note) => 
    note.body.toLowerCase().includes(searchTerm)
  );

  console.log("notes1: ", allNotes)

  return (
    <div className="main-container">
      <Sidebar />
      <div className="notes-list">
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
        <input
          className="search-bar"
          type="text"
          placeholder="Search Notes..."
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        {/* <img src={toggle} alt="" /> */}
      </div>
    </div>
  );
}

export default NoteList;
