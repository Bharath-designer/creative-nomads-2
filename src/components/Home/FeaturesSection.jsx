import { useState } from "react";
import styles from "../../styles/components/Features.module.css";
import layoutStyles from "../../styles/layout//HomeLayout.module.css";

import feature1 from "../../assets/images/feature-1.png";
import feature2 from "../../assets/images/feature-2.png";
import feature3 from "../../assets/images/feature-3.png";
import feature4 from "../../assets/images/feature-4.png";
import feature5 from "../../assets/images/feature-5.png";

import buds from "../../assets/images/buds.png";
import feature_side from "../../assets/images/feature-side.png";
import ActionButton from "./ActionButton";

import pointer_icon from "../../assets/icons/Natural_User_Interface.png";
import pointerIconDark from "../../assets/icons/Natural User Interface-dark.png";

import { AnimatePresence, motion } from "framer-motion";

const FeaturesSection = () => {
  const data = [
    {
      image: feature1,
      title: "8K ULTRA HD GRAPHICS",
      desc: "Experience breathtaking visuals like never before with true 8K Ultra HD resolution. Every detail, from lifelike character expressions to stunning open-world environments, is rendered with unparalleled clarity and depth, making your games more immersive than ever.",
    },
    {
      image: feature2,
      title: "NEXT-GEN RAY TRACING",
      desc: "Step into a world of real-time lighting and reflections with the most advanced ray tracing technology. Enjoy hyper-realistic shadows, reflections, and global illumination that bring your favorite games to life with cinematic-level realism.",
    },
    {
      image: feature3,
      title: "AI-POWERED GAMEPLAY",
      desc: "Harness the power of cutting-edge AI that adapts to your playstyle, creating more dynamic enemies, smarter NPCs, and unpredictable challenges. The PS6 revolutionizes gaming with self-learning AI that makes every playthrough unique and engaging.",
    },
    {
      image: feature4,
      title: "DUALSENSE 2 CONTROL",
      desc: "Feel every moment like never before with the enhanced DualSense 2 controller. Featuring next-gen haptic feedback, improved adaptive triggers, and precision motion sensors, the PS6 delivers unmatched control and responsiveness, pulling you deeper.",
    },
    {
      image: feature5,
      title: "SSD 3.0 SPEED",
      desc: "Say goodbye to loading screens with the lightning-fast SSD 3.0. Games load in an instant, worlds render seamlessly, and transitions are smoother than ever. With speeds that redefine next-gen gaming, every second counts in your immersive experience.",
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(data[0]);

  const handleMouseEnter = (index) => {
    setSelectedFeature(data[index]);
  };

  const initialX = -150;
  const exitX = 100;
  const motionOpacity = 0;
  const enterExitDuration = 0.4;
  const enterDelay = 0;

  const motionTransition = {
    type: "spring",
    stiffness: 60,
    damping: 20,
  };

  return (
    <div
      id="features"
      className={`${styles["container"]} ${layoutStyles["container-full-screen"]}`}
    >
      <div className={styles["heading"]}>Revolutionary Features</div>
      <div className={styles["content"]}>
        <div className={styles["content-left"]}>
          <div className={styles["feature-rows-container"]}>
            {data.map((item, index) => (
              <motion.div
                initial={{ x: -40, opacity: 0 }}
                whileInView={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.8,
                    ease: "anticipate",
                  },
                }}
                viewport={{once: true, amount: 0.1}}
                onMouseEnter={() => handleMouseEnter(index)}
                style={{ "--index": index - 1 }}
                key={index}
                className={styles["feature-row"]}
              >
                <div className={styles["feature-img-container"]}>
                  <img src={item.image} alt="" />
                </div>
                <div className={styles["feature-title"]}>{item.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className={styles["content-right"]}>
          <div className={styles["side-left"]}>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedFeature.title}
                initial={{ x: initialX, opacity: motionOpacity }}
                exit={{
                  x: exitX,
                  opacity: motionOpacity,
                  transition: { duration: enterExitDuration },
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: {
                    duration: enterExitDuration,
                    delay: enterDelay,
                  },
                }}
                transition={motionTransition}
              >
                <div className={styles["explanation-title"]}>
                  {selectedFeature.title}
                </div>
                <div className={styles["explanation-desc"]}>
                  {selectedFeature.desc}
                </div>
              </motion.div>
            </AnimatePresence>
            <motion.div className={styles["explanation-btn"]}>
              <ActionButton
                text={"LEARN MORE"}
                icon={pointer_icon}
                darkIcon={pointerIconDark}
              />
            </motion.div>
          </div>
          <div className={styles["side-right"]}>
            <div className={styles["buds-img-container"]}>
              <img src={buds} alt="" />
            </div>
            <div className={styles["side-img"]}>
              <img src={feature_side} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
