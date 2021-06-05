import './App.css';
import Header from './components/Header';
import FirstSlide from './components/FirstSlide';
import SecondSlide from './components/SecondSlide';
import ThirdSlide from './components/ThirdSlide';
import FourthSlide from './components/FourthSlide';
import Footer from './components/Footer';

function App() {
  const lightTheme = {
    pageBackground: "white",
  }

  const datkTheme = {
    pageBackground: "#1C1C1C"
  }
  
  const theme = {
    light = lightTheme,
    dark = darkTheme
  }
  
  return (
    <div className="app" id="home">
      <Header />
      <div className="home">
      <FirstSlide />
      </div>
      <div className="about" id="about">
      <SecondSlide />
      </div>
      <div className="work" id="work">
      <ThirdSlide />
      </div>
      <div className="contact" id="contact">
      <FourthSlide />
      </div>
      <Footer />
    </div>
  );
}

export default App;
