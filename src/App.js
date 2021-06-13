import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import FirstSection from "./components/FirstSection";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Footer from "./components/Footer";
import { keepTheme } from "./utils/themes";
import { useTranslation } from "react-i18next";

function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <div className="app" id="home">
      <Header />
      <div className="home">
        <FirstSection />
      </div>
      <div className="about" id="about">
        <SecondSection />
      </div>
      <div className="work" id="work">
        <ThirdSection />
      </div>
      <div className="contact" id="contact">
        <FourthSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
