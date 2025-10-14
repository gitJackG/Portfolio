import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Projects from './components/Projects';
import Footer from './components/Footer';
import CV from './components/CV';
import './styles/main.scss';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <About />
        <Work />
        <Projects />
        <CV />
        <Footer />
      </div>
    </Router>
  );
};

export default App;