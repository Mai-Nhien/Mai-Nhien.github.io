import React from 'react';
import './App.css';
import Landing from './components/Landing.js'
import About from './components/About.js'
import NavBar from './components/NavBar.js'
import Projects from './components/Projects.js'

function App() {
  return (
    <div>
      <NavBar/>
      <Landing/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
