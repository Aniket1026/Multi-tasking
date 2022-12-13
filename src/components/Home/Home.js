import React from "react";
import { Link } from "react-router-dom";
import Background from "../../Assets/Images/page-background.webp";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <img alt="background" className="bg-img" src={Background} />
      <div style={{ color: "cornflowerblue",fontSize:'100px' }}>MultiTask App</div>
      <div className="cards">
        <Link to="/rock-paper-scissor">
          <button className="option1">
            <span>Rock-Paper-Scissor</span>
            <div className="liquid"></div>
          </button>
        </Link>
        <Link to="/Todolist">
          <button className="option1">
            <span>Todolist</span>
            <div className="liquid"></div>
          </button>
        </Link>
        <Link to="/WeatherApp">
          <button className="option1">
            <span>Weather-App</span>
            <div className="liquid"></div>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
