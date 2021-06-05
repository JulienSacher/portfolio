import './App.css';
import Header from './components/Header';
import FirstSlide from './components/FirstSlide';
import SecondSlide from './components/SecondSlide';
import ThirdSlide from './components/ThirdSlide';
import FourthSlide from './components/FourthSlide';

function App() {
  return (
    <div className="app" id="home">
      <Header />
      <FirstSlide className="home" />
      <SecondSlide className="about" id="about" />
      <ThirdSlide className="work" id="work"/>
      <FourthSlide className="contact" />
    </div>
  );
}

export default App;
