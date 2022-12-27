import { React } from "react";
import Navbar from "../Components/Navbar";
import FirstSection from "../Components/FirstSection";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
import ForthSection from "../Components/ForthSection";
import FifthSection from "../Components/FifthSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection
        container={"containerA"}
        rightHand={"rightHandA"}
        leftHand={"leftHandA"}
        laptop={"laptopA"}
        phone={"phoneA"}
        text={"textA"}
        color={"#f6dfeb"}
      ></ForthSection>
      <ForthSection
        container={"containerB"}
        rightHand={"rightHanB"}
        leftHand={"leftHandB"}
        laptop={"laptopB"}
        phone={"phoneB"}
        text={"textB"}
        color={" #ffda2d"}
      ></ForthSection>
      <FifthSection />
    </div>
  );
};

export default Home;
