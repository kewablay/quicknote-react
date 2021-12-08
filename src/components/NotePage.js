import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function NotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  
  useEffect(() => {
      getNote()
  },[{id}])

  const getNote = async () => {
    const res = await fetch(`/api/${id}/`);
    const data = await res.json();
    console.log(data)
    setNote(data);
  };

  return (
    <div>
      <p> {note?.body}</p>
    </div>
  );
}

export default NotePage;
