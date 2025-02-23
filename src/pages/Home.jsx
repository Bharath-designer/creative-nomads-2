import React, { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import HomeLanding from "../components/Home/HomeLanding";
import ControllerDetails from "../components/Home/ControllerDetails";
import FeaturesSection from "../components/Home/FeaturesSection";
import GetGameSection from "../components/Home/GetGameSection";
import Footer from "../components/Home/Footer";

import cursor_pointer from "../assets/icons/cursor-hand-pointer.png";

const Home = () => {
  const [deviceHasCursor, setDeviceHasCursor] = useState(null);
  const [isCustomCursor, setIsCustomCursor] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const deviceHasCursor = window.matchMedia("(pointer: fine)").matches;
    const showCustomCursor =
      isCustomCursor === null ? deviceHasCursor : isCustomCursor;
    //  const  showCustomCursor  = !!isCustomCursor
    setIsCustomCursor(showCustomCursor);
    setDeviceHasCursor(deviceHasCursor);

    if (showCustomCursor) {
      document.body.classList.add("hide-cursor");
    } else {
      document.body.classList.remove("hide-cursor");
    }
  }, [isCustomCursor]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const startTime = 3000;
    const endTime = 5000;

    const countStored = localStorage.getItem("count")
    let currentCount = 0

    try {
      const temp = parseInt(countStored)
      if (!isNaN(temp)) {
        currentCount = temp
      }

    } catch (error) {
      console.error("ERROR getting value from localstorage");
    }
    
    localStorage.setItem("count",currentCount+1)
    
    if (currentCount > 2) {
      return;
    }


    setTimeout(() => {
      const cursorOptions = document.querySelector(".cursor-options");
      if (cursorOptions) {
        console.log(cursorOptions);
        cursorOptions.classList.add("expanded");
      }
    }, startTime);

    setTimeout(() => {
      const cursorOptions = document.querySelector(".cursor-options");
      if (cursorOptions) {
        cursorOptions.classList.remove("expanded");
      }
    }, endTime);

  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      opacity: 1,
      scale: 1,
    },
    hover: {
      scale: 1.5,
      opacity: 0.8,
    },
  };

  const toggleCursor = () => {
    setIsCustomCursor((prev) => !prev);
  };

  return (
    <>
      <HomeLanding />
      <ControllerDetails />
      <FeaturesSection />
      <GetGameSection />
      <Footer />
      {isCustomCursor && (
        <motion.div
          className="custom-cursor"
          initial={{ opacity: 0 }}
          variants={cursorVariants}
          animate={"default"}
          transition={{
            type: "tween",
            stiffness: 4000,
            damping: 60,
            mass: 0.9,
            duration: 0.05,
          }}
        />
      )}
      {deviceHasCursor && (
        <div className={`cursor-options ${isCustomCursor ? "active" : ""}`}>
          <div onClick={toggleCursor} className="toggle-cur">
            <img src={cursor_pointer} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
