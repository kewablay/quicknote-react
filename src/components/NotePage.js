import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NotePage({ match, history }) {
  const { id } = useParams();
  const noteId = match.params.id;
  const [note, setNote] = useState(null);
  const location = useLocation();
  // const { color } = location.state

  useEffect(() => {
    getNote(noteId);
  }, [noteId]);

  const getColor = (note) => {
    if (noteId === "new") {
      console.log("id is new");
      const { color } = location.state;
      console.log(color)
      return color
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
    console.log(note)
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
    } else if ((noteId === "new") & (note.body === null)) {
      alert("Can't save an empty note");
    } else if ((noteId === "new") & (note.body !== null)) {
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
            setNote({ ...note, body: e.target.value , color: getColor(note)});
          }}
          style={{ background: getColor(note)}}
        ></textarea>
        <button className="save-btn" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default NotePage;
