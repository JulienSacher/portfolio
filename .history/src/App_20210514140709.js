import './App.css';
import Header from './components/Header';
import FirstSlide from './components/FirstSlide';
import SecondSlide from './components/SecondSlide';
import ThirdSlide from './components/ThirdSlide';
import FourthSlide from './components/FourthSlide';

function App() {
  return (
    <div className="app">
      <Header />
      <FirstSlide className="home" />
      <SecondSlide className="about" />
      <ThirdSlide className="home" />
      <FourthSlide />
    </div>
  );
}

export default App;
