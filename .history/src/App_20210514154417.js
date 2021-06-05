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
      <div className="home">
      <FirstSlide />
      </div>
      <div>
      <SecondSlide />
      </div>
      <div>
      <ThirdSlide className="work" id="work" />
      </div>
      <div>
      <FourthSlide className="contact" id="contact" />
      </div>
    </div>
  );
}

export default App;
