import React from "react";
import heroImage from "../images/hero-img.svg";
import { motion } from "framer-motion";

export const NewNote = () => {
    const introVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            // transition: {
            //     delay: .3,
            // }
        }
    }

  return (
    <motion.div
      className="intro-section"
      variants={introVariant}
      initial="hidden"
      animate="visible"
    >
      <div className="intro-text">
        <h1>Welcome to Quicknote</h1>
        <p>Making note taking an easy task</p>
        <a href="#" className="cta">Get started</a>
      </div>
      <div className="hero-img">
        <img src={heroImage} alt="hero-img" />
      </div>
    </motion.div>
  );
};
