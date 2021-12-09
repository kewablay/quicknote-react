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
    const res = await fetch(`/api/${id}/`);
    const data = await res.json();
    console.log(data);
    setNote(data);
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
    console.log("done with put request")
  };

  const handleSubmit = () => {
    console.log('about to submit')
    updateNote();
    history.push("/");
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
