import React from "react";

import styles from "../../styles/components/LandingContent.module.css";
import ActionButton from "./ActionButton";

import preBook from "../../assets/icons/Pay.png";
import preBookDark from "../../assets/icons/Paydark.png";
import glasses from "../../assets/icons/Glasses.png";
import glassDark from "../../assets/icons/Glasses-dark.png";
import ps from "../../assets/images/ps_landing_image.png";

import { motion } from "framer-motion";

const LandingContent = ({rootDelay}) => {

  const currentDelay = rootDelay + 0.5;
  const animationDuration = .5;

  return (
    <div id="playstation" className={styles["wrapper"]}>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{
          y: 0,
          x:0,
          opacity: 1,
          transition: {
            type: "tween",
            delay: currentDelay,
            duration: animationDuration,
            ease:"easeOut"
          },
        }}
        className={styles["left"]}
      >
        <div className={styles["sub-head"]}>The Future of Gaming Is Here</div>
        <div className={styles["heading-container"]}>
          Introducing PlayStation 6 with Power and Precision
        </div>
        <div className={styles["desc"]}>
          A New Era of Gaming Begins, Where Every Moment Feels More Real, Every
          Action More Precise, and Every Experience More Immersive Than Ever
          Before, Redefining What's Possible in the World of Play.
        </div>
        <div className={styles["btn-container"]}>
          <ActionButton
            text={"PRE BOOK"}
            icon={preBook}
            darkIcon={preBookDark}
          />
          <ActionButton
            text={"WATCH THE REVEAL"}
            icon={glasses}
            darkIcon={glassDark}
          />
        </div>
      </motion.div>
      <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{
        y: 0,
        x:0,
        opacity: 1,
        transition: {
          type: "tween",
          delay: currentDelay ,
          duration: animationDuration,
          ease:"easeOut"

        },
      }}
      className={styles["right-img-container"]}>
        <img draggable={false} src={ps} />
      </motion.div>
    </div>
  );
};

export default LandingContent;
