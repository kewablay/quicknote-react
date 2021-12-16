import React, { useState } from "react";
import { Link } from "react-router-dom";
import addButton from "../images/add-button.png";
import { motion } from "framer-motion";

function Sidebar() {
  const colors = ["#BAE1FF", "#BAFFC9", "#C4C4C4", "#FFB3BA", "#FFFFBA"];

  const [isOpen, setIsOpen] = useState(false);

  const colorListVariant = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,
      transition: {
        // when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const colorVariant = {
    hidden: {
      opacity: 0,
      y: -25,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="side-bar">
      <div className="add-note">
        <motion.img
          src={addButton}
          alt="Add"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9, rotate: 90 }}
          onClick={() => setIsOpen(!isOpen)}
        />
        <motion.div
          className="color-list"
          variants={colorListVariant}
          animate={isOpen ? "visible" : "hidden"}
        >
          {colors.map((color) => (
            <Link to={{ pathname: "/new", state: { color: color } }}>
              <motion.li
                className="color"
                style={{ background: color }}
                variants={colorVariant}
              ></motion.li>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Sidebar;
