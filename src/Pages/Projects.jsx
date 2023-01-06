import React from "react";
import Navbar from "../Components/Navbar";
import FirstSection from "../Components/FirstSection";
import ForthSection from "../Components/ForthSection";
import Footer from "../Components/Footer";
import img from "../assets/check_projects.png";
import ecommProject from "../assets/ecomm.png";
import ecommProject_phone from "../assets/ecomm_phone.png";
import menchProject from "../assets/mensch.png";
import menchProject_phone from "../assets/mensch_phone.png";
const ecommUrl = "https://ecomm-frontend-client.onrender.com/";
const ecommDescription =
  "Bankai is a high fashion brand, Bankai means the final form in Japanese, I have built both client and server, for the client side I used ReactJS, Redux toolkit, and Styled Component for CSS styling. I have also used libraries like Axios. On the other side, the server was built using NodeJS and ExpressJs  alongside  Mongoose  and  MongoDB as a database";

const Projects = () => {
  return (
    <div>
      <Navbar />
      <FirstSection fontSize="10vh" imgsrc={img} text="Projects"></FirstSection>
      <ForthSection
        description={ecommDescription}
        container={"containerA"}
        rightHand={"rightHandA"}
        leftHand={"leftHandA"}
        laptop={"laptopA"}
        phone={"phoneA"}
        text={"textA"}
        dir={ecommUrl}
        horizontalDirection="900"
        verticalDirection="700"
        laptopImage={ecommProject}
        phoneImage={ecommProject_phone}
      ></ForthSection>
      <ForthSection
        container={"containerB"}
        rightHand={"rightHanB"}
        leftHand={"leftHandB"}
        laptop={"laptopB"}
        phone={"phoneB"}
        text={"textB"}
        horizontalDirection="-900"
        verticalDirection="700"
        laptopImage={menchProject}
        phoneImage={menchProject_phone}
      ></ForthSection>
      <Footer />
    </div>
  );
};

export default Projects;
