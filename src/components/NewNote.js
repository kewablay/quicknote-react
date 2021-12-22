import React, { useState } from "react";
import heroImage from "../images/hero-img.svg";
import { motion } from "framer-motion";
import { GetStartedModal } from "./GetStartedModal";

export const NewNote = () => {
  const [started, setStarted] = useState(false);

  const GetStarted = () => {
    console.log("get started clicked ");
    setStarted(true);
  };

  const introSectionVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };

  const introTextVariant = {
    hidden: {
      // x: -200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        // delay: .1,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const heroImageVariant = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      {started && <GetStartedModal started={started} setStarted={setStarted} />}
      <motion.div
        className="intro-section"
        variants={introSectionVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="intro-text" variants={introTextVariant}>
          <motion.h1 variants={introTextVariant}>
            Welcome to Quicknote
          </motion.h1>
          <motion.p variants={introTextVariant}>
            Wanna take a quick note?
          </motion.p>
          <motion.a
            href="#"
            className="cta"
            variants={introTextVariant}
            onClick={GetStarted}
          >
            Get started
          </motion.a>
        </motion.div>
        <motion.div className="hero-img" variants={heroImageVariant}>
          <img src={heroImage} alt="hero-img" />
        </motion.div>
      </motion.div>
    </>
  );
};
