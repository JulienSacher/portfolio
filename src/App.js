import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { keepTheme } from "./utils/themes";

function App() {
  useEffect(() => {
    keepTheme();
  });

  return (
    <div className="app" id="home">
      <Header />
      <div className="home">
        <Home />
      </div>
      <div className="about" id="about">
        <Skills />
      </div>
      <div className="work" id="work">
        <Portfolio />
      </div>
      <div className="contact" id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
