import { useState } from "react";
import "./App.css";
import Header from "./components/content/Header";
import FirstSection from "./components/content/FirstSection";
import SecondSection from "./components/content/SecondSection";
import ThirdSection from "./components/content/ThirdSection";
import FourthSection from "./components/content/FourthSection";
import Footer from "./components/content/Footer";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <div className="app" id="home">
      <ThemeContextProvider>
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
      </ThemeContextProvider>
    </div>
  );
}

export default App;
