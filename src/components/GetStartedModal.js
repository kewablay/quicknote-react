import React from "react";
import getStartedGif from "../images/getstarted.gif";
import { motion } from "framer-motion";

export const GetStartedModal = ({ started, setStarted }) => {
  const backdropVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  const modalVariant = {
    hidden: {
      opacity: 0,
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .5,
      },
    },
  };

  return (
    <motion.div
      className="backdrop"
      variants={backdropVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="get-started" variants={modalVariant}>
        <p>Add new note</p>
        <img src={getStartedGif} alt="getStarted" id="get-started-img" />
        <button className="got-it" onClick={() => setStarted(false)}>
          Got it
        </button>
      </motion.div>
    </motion.div>
  );
};
