import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NotePage({ match, history }) {
  const { id } = useParams();
  const noteId = match.params.id;
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [noteId]);

  const getNote = async () => { 
    if(noteId === 'new') return
    const res = await fetch(`/api/${id}/`);
    const data = await res.json();
    console.log(data);
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

  };

  
  const updateNote = async () => {
    console.log('update note triggered')
    fetch(`/api/${id}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(note),
    });
  };

  const handleSubmit = () => {
    console.log('about to submit')
    if (noteId !== 'new'){
      updateNote();
      history.push("/");
    }
    else if(noteId === 'new' & note.body === null){
      alert("Can't save an empty note");
    }
    else if(noteId === 'new' & note.body !== null){
      createNote();
      history.push("/");
    }
    
  };

  return (
    <div className="note-body">
      {/* <textarea value={note?.body}> </textarea> */}
      <div className="note-box">
        <div className="title-bar"></div>
        <textarea
          defaultValue={note?.body}
          onChange={(e) => {
            setNote({ ...note, body: e.target.value });
          }}
        ></textarea>
        <button className="save-btn" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default NotePage;
