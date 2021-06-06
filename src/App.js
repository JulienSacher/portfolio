import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection';
import ThirdSection from './components/ThirdSection';
import FourthSection from './components/FourthSection';
import Footer from './components/Footer';
import { ThemeProvider } from "styled-components";

const lightTheme = {
  pageBackground: "white",
}

const darkTheme = {
  pageBackground: "#1C1C1C"
}

const themes = {
  light: lightTheme,
  dark: darkTheme
}

function App() {
  const [theme, setTheme] = useState("dark")
  return (
    <ThemeProvider theme={themes[theme]}>
    <div className="app" id="home" theme={theme} setTheme={setTheme}>
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
    </ThemeProvider>
  );
}

export default App;
