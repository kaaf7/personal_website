import { React } from "react";
import Navbar from "../Components/Navbar";
import FirstSection from "../Components/FirstSection";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
import ForthSection from "../Components/ForthSection";
import FifthSection from "../Components/FifthSection";
import Footer from "../Components/Footer";
const Home = () => {
  const ecommUrl = "https://ecomm-frontend-client.onrender.com/";

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
      <FifthSection />
    </div>
  );
};

export default Home;
