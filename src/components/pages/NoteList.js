import React, { useState, useEffect } from "react";
import ListItem from "../ListItem";
import Sidebar from "../Sidebar";

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
        {notes.map((note) => (
          <ListItem key={note.id} note={note}  getNotes={getNotes}/>
        ))}
      </div>
    </div>
  );
}

export default NoteList;
