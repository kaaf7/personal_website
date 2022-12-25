import React from "react";
import Navbar from "../Components/Navbar";
import UpperSection from "../Components/UpperSection";
import MidSection from "../Components/MidSection";
import LowerSection from "../Components/LowerSection";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <UpperSection />
      <MidSection />
      <LowerSection />
      <Footer />
    </div>
  );
};

export default Home;
