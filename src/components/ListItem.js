import React from 'react'
import { Link } from "react-router-dom";

function ListItem({ note }) {
    return (
      <Link to={`/${note.id}`}>
        <h3 className="card">{note.body}</h3>
      </Link>
    );
}

export default ListItem
