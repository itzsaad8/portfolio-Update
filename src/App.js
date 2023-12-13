import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sociallinks from './components/Sociallinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
   
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Contact/>

    <Sociallinks/>
    </>
  );
}

export default App;
