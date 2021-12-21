import React from "react";
import { Link } from "react-router-dom";

import home from "../images/home1.png";


function header() {
  return (
    <div className="header">
      <div className="navigation">
        <h3 className="brand">Quick Note</h3>
        <Link to="/" className="home-icon">
          <img id="home-img" src={home} alt="" />
          <h3 className="nav-item">Home</h3>
        </Link>
      </div>
    </div>
  );
}

export default header;
