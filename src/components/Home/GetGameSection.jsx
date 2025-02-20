import styles from "../../styles/components/GetGameSection.module.css";
import layoutStyles from "../../styles/layout/HomeLayout.module.css";
import ActionButton from "./ActionButton";

import controllerIcon from "../../assets/icons/Game_Controller.png";
import controllerIconDark from "../../assets/icons/Game Controller-dark.png";

import icon1 from "../../assets/icons/get-game-icon-1.png";
import icon2 from "../../assets/icons/get-game-icon-2.png";
import icon3 from "../../assets/icons/get-game-icon-3.png";
import icon4 from "../../assets/icons/get-game-icon-4.png";
import icon5 from "../../assets/icons/get-game-icon-5.png";
import icon6 from "../../assets/icons/get-game-icon-6.png";

import sideImg1 from "../../assets/images/get-game-side-1.png";
import sideImg2 from "../../assets/images/get-game-side-2.png";
import sideImg3 from "../../assets/images/get-game-side-3.png";
import sideImg4 from "../../assets/images/get-game-side-4.png";
import sideImg5 from "../../assets/images/get-game-side-5.png";
import sideImg6 from "../../assets/images/get-game-side-6.png";

import mainImg1 from "../../assets/images/get-game-main-1.png";
import mainImg2 from "../../assets/images/get-game-main-2.png";
import mainImg3 from "../../assets/images/get-game-main-3.png";
import mainImg4 from "../../assets/images/get-game-main-4.png";
import mainImg5 from "../../assets/images/get-game-main-5.png";
import mainImg6 from "../../assets/images/get-game-main-6.png";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const GetGameSection = () => {
  const data = [
    {
      icon: icon1,
      sideImg: sideImg1,
      mainImg: mainImg1,
      game: "ASTROBOT",
    },
    {
      icon: icon2,
      sideImg: sideImg2,
      mainImg: mainImg2,
      game: "THE LAST OF US",
    },
    {
      icon: icon3,
      sideImg: sideImg3,
      mainImg: mainImg3,
      game: "RATCHET & CLANK",
    },
    {
      icon: icon4,
      sideImg: sideImg4,
      mainImg: mainImg4,
      game: "EA SPORTS F 25",
    },
    {
      icon: icon5,
      sideImg: sideImg5,
      mainImg: mainImg5,
      game: "HELLDIVERS",
    },
    {
      icon: icon6,
      sideImg: sideImg6,
      mainImg: mainImg6,
      game: "SPIDERMAN",
    },
  ];

  const [selectedImages, setSelectedImages] = useState(data[0]);

  const handleMouseEnter = (index) => {
    setSelectedImages(data[index]);
  };

  const cacheImages = () => {
    data.forEach((item) => {
      const sideImg = new Image();
      sideImg.src = item.sideImg;
      const mainImg = new Image();
      mainImg.src = item.mainImg;
    });
  };

  useEffect(() => {
    cacheImages();
  }, []);

  return (
    <div id="games"
      className={`${styles["container"]} ${layoutStyles["container-full-screen"]}`}
    >
      <div className={styles["left"]}>
        <AnimatePresence mode="wait">
          <motion.img
            initial={{ x: -300, y: -200, rotate: 50, opacity: 0 }}
            animate={{
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
            exit={{
              y: -200,
              x: -300,
              rotate: 50,
              opacity: 0,
              transition: { duration: 0.4 },
            }}
            key={selectedImages.sideImg}
            src={selectedImages.sideImg}
            alt=""
          />
        </AnimatePresence>
      </div>
      <div className={styles["middle"]}>
        <div className={styles["title"]}>Play Your Way !</div>
        <div className={styles["desc"]}>
          Embark on Epic Adventures, Conquer New Worlds, and Redefine Your
          Gaming Journey with PS6 Exclusive Titles and Enhanced Classics
        </div>
        <div className={styles["icons-container"]}>
          {data.map((item, index) => (
            <div key={index} className={styles["icon"]}>
              <img
                onMouseEnter={() => handleMouseEnter(index)}
                src={item.icon}
                alt=""
              />
            </div>
          ))}
        </div>
        <div className={styles["get-game-btn-container"]}>
          <ActionButton text={"GET GAME NOW"} icon={controllerIcon} darkIcon={controllerIconDark}/>
        </div>
      </div>
      <div className={styles["right"]}>
        <AnimatePresence mode="wait">
        <motion.div
          key={selectedImages.game}
          initial={{ opacity: 0, right: 150 }}
          animate={{
            opacity: 1,
            right: 0,
            transition: { duration: 0.3, delay: .3 },
          }}
          exit={{
            opacity: 0,
            right: 150,
            transition: { duration: 0.3 },
          }}
          className={styles["game-title"]}
        >
          {selectedImages.game}
        </motion.div>
          </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.img
            initial={{ x: 500, y: 0, rotate: -30, opacity: 0 }}
            animate={{
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
              transition: { duration: 0.6 },
            }}
            exit={{
              y: 0,
              x: 500,
              rotate: -30,
              opacity: 0,
              transition: { duration: 0.4 },
            }}
            key={selectedImages.mainImg}
            src={selectedImages.mainImg}
            alt=""
          />
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GetGameSection;
