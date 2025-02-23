import React, { useEffect, useLayoutEffect, useState } from "react";
import styles from "../../styles/components/HomeLanding.module.css";
import layoutStyles from "../../styles/layout/HomeLayout.module.css";

import ps6Logo from "../../assets/icons/ps6_logo.png";
import preBook from "../../assets/icons/Pay.png";

import menuIcon from "../../assets/icons/menu.png";

import preBookDark from "../../assets/icons/Paydark.png";

import ActionButton from "./ActionButton";
import LandingContent from "./LandingContent";

import { motion } from "framer-motion";

const HomeLanding = () => {
  const [isNavShown, setIsNavShown] = useState(true);

  useLayoutEffect(() => {
    if (window.innerWidth <= 1100) {
      setIsNavShown(false);
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1100) {
        setIsNavShown(true);
      } else {
        setIsNavShown(false);
      }
    });

    document.addEventListener("click", (e) => {
      if (e.target.closest(`.${styles["nav-container"]}`)) {
        return;
      }
      if (window.innerWidth <= 1100) {
        setIsNavShown(false);
      }
    });
  }, []);

  const toggleNav = () => {
    setIsNavShown(!isNavShown);
  };


  const parentDuration = 1;
  const rootDelay = parentDuration + 0.5;


  return (
    <motion.div
    initial={{ opacity: .001 }}
        animate={{
          opacity: 1,
          transition: {
            duration: parentDuration,
            delay:.5
          },
        }}
      className={`${styles["container"]} ${layoutStyles["container-full-screen"]}`}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            type: "tween",
            delay: rootDelay,
          },
        }}
        className={styles["nav-container"]}
      >
        <div className={styles["left"]}>
          <img draggable={false} src={ps6Logo} />
        </div>
        {isNavShown && (
          <div className={styles["middle"]}>
            <a href="#playstation" className={styles["nav-item"]}>
              PLAYSTATION 6
            </a>
            <a href="#features" className={styles["nav-item"]}>
              FEATURES
            </a>
            <a href="#games" className={styles["nav-item"]}>
              GAMES
            </a>
            <a href="#accessories" className={styles["nav-item"]}>
              ACCESSORIES
            </a>
            <a href="#contact" className={styles["nav-item"]}>
              CONTACT
            </a>
          </div>
        )}
        <div className={styles["right"]}>
          <ActionButton icon={preBook} text="PRE BOOK" darkIcon={preBookDark} />
        </div>
        <div className={styles["hamburger"]}>
          <img onClick={toggleNav} draggable={false} src={menuIcon} alt="" />
        </div>
      </motion.div>
      <LandingContent rootDelay={rootDelay}/>
    </motion.div>
  );
};

export default HomeLanding;
