import React, { useState, useEffect } from "react";
import ListItem from "../ListItem";
import Sidebar from "../Sidebar";
import { motion } from 'framer-motion'

function NoteList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const res = await fetch("/api/");
    const data = await res.json();
    console.log(data);
    setNotes(data);
  };
  
  return (
    <div className="main-container">
      <Sidebar />
      <div className="notes-list">
        <motion.div className="notes-container"
        initial={{}}
        animate={{}}
        >
          {notes.map((note) => (
            <ListItem key={note.id} note={note} getNotes={getNotes} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default NoteList;
