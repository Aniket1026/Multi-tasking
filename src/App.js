import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Game from './components/Game';
import Main from './components/Main';
import WeatherApp from './components/weather-app/WeatherApp';
import Home from './components/Home/Home';
import Pdfimg from './components/Converter/Converter';

function App() {
 
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rock-paper-scissor" element={<Game />} />
          <Route exact path="/Todolist" element={<Main />} />
          <Route exact path="/WeatherApp" element={<WeatherApp />} />
          <Route exact path="/image-converter" element={<Pdfimg />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
