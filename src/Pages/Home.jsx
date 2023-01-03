import { React } from "react";
import Navbar from "../Components/Navbar";
import FirstSection from "../Components/FirstSection";
import SecondSection from "../Components/SecondSection";
import ThirdSection from "../Components/ThirdSection";
import FifthSection from "../Components/FifthSection";
import img from "../assets/Lower_Section.png";
import Footer from "../Components/Footer";
const Home = () => {
  const ecommUrl = "https://ecomm-frontend-client.onrender.com/";
  return (
    <div>
      <Navbar />
      <FirstSection fontSize="20vh" imgsrc={img} text ="Hi"/>
      <SecondSection />
      <ThirdSection />
      <FifthSection />
      <Footer />
    </div>
  );
};

export default Home;
