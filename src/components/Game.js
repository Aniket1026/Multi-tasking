import React, { useState } from "react";

import "./Game.css";
import Move from "./rps/Move/Move";
import ScoreCard from "./rps/Scorecard/ScoreCard";
import Footer from "./rps/Footer/Footer";

function Game() {
  const [score, setScore] = useState(0);
  return (
    <div className="Game">
      <ScoreCard score={score} setScore={setScore} />

      <Move score={score} setScore={setScore} />
      <Footer setScore={setScore} />
    </div>
  );
}

export default Game;
