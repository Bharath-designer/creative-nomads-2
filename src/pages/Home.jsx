import React from "react";
import HomeLanding from "../components/Home/HomeLanding";
import ControllerDetails from "../components/Home/ControllerDetails";
import FeaturesSection from "../components/Home/FeaturesSection";
import GetGameSection from "../components/Home/GetGameSection";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <>
      <HomeLanding />
      <ControllerDetails/>
      <FeaturesSection/>
      <GetGameSection/>
      <Footer/>
    </>
  );
};

export default Home;
