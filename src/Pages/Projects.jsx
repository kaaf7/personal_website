import React from "react";
import Navbar from "../Components/Navbar";
import FirstSection from "../Components/FirstSection";
import ForthSection from "../Components/ForthSection";
import Footer from "../Components/Footer";
import img from "../assets/check_projects.png";
const ecommUrl = "https://ecomm-frontend-client.onrender.com/";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <FirstSection fontSize ="8vh" imgsrc={img} text="Projects"></FirstSection>
      <ForthSection
        container={"containerA"}
        rightHand={"rightHandA"}
        leftHand={"leftHandA"}
        laptop={"laptopA"}
        phone={"phoneA"}
        text={"textA"}
        dir={ecommUrl}
      ></ForthSection>
      <ForthSection
        container={"containerB"}
        rightHand={"rightHanB"}
        leftHand={"leftHandB"}
        laptop={"laptopB"}
        phone={"phoneB"}
        text={"textB"}
      ></ForthSection>
      <Footer/>
    </div>
  );
};

export default Projects;
