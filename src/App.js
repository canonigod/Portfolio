import './App.css';
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Coding from './components/Coding/Coding';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Hero/>
      <About />
      <Portfolio />
      <Coding />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
