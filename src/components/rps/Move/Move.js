import React, { useState } from "react";

import "./Move.css";
import "../../Game.css"
import Icons from "./Icons";
import PAPER from "../../../Assets/Images/icon-paper.svg";
import SCISSOR from "../../../Assets/Images/icon-scissors.svg";
import ROCK from "../../../Assets/Images/icon-rock.svg";

const choiceList = [
  {
    Id: "PAPER",
    Image: PAPER,
    Color: "cornflowerblue",
  },
  {
    Id: "SCISSOR",
    Image: SCISSOR,
    Color: "rgb(224, 224, 46)",
  },
  {
    Id: "ROCK",
    Image: ROCK,
    Color: "rgb(255, 40, 40)",
  },
];

const Move = ({ setScore, score }) => {
  const [selectedIcon, setSelectedIcon] = useState(false);
  const [result, setResult] = useState("");

  const [selectionMade, setSelectionMade] = useState({});

  const handleClick = (event, param) => {
    var choice1 = choiceList.filter((eachvalue) => eachvalue.Id === param);
    var choice2 = choiceList[Math.floor(Math.random() * choiceList.length)];

    setSelectedIcon(true);

    if (choice1[0].Id === "ROCK") {
      switch (choice2.Id) {
        case "PAPER":
          setResult("YOU LOSE");
          setScore(score - 1);
          break;
        case "SCISSOR":
          setResult("YOU WON");
          setScore(score + 1);
          break;
        default:
          setResult("IT IS DRAW");
          setScore(score);
      }
    } else if (choice1[0].Id === "PAPER") {
      switch (choice2.Id) {
        case "ROCK":
          setResult("YOU WON");
          setScore(score + 1);
          break;
        case "SCISSOR":
          setResult("YOU LOSE");
          setScore(score - 1);
          break;
        default:
          setResult("IT IS DRAW");
          setScore(score);
      }
    } else {
      switch (choice2.Id) {
        case "ROCK":
          setResult("YOU LOSE");
          setScore(score - 1);
          break;
        case "PAPER":
          setResult("YOU WON");
          setScore(score + 1);
          break;
        default:
          setResult("IT IS DRAW");
          setScore(score);
      }
    }

    const variable = {
      firstChoice: choice1,
      secondChoice: choice2,
    };

    setSelectionMade(variable);
  };

  return (
    <>
      {!selectedIcon ? (
        <div className="moves-container">
          <div className="paper-scissors">
            <div onClick={(event) => handleClick(event, "PAPER")}>
              <Icons icon={PAPER} alt="paper-icon" clr="cornflowerblue" />
            </div>
            <div onClick={(event) => handleClick(event, "SCISSOR")}>
              <Icons
                icon={SCISSOR}
                alt="scissor-icon"
                clr="rgb(224, 224, 46)"
              />
            </div>
          </div>
          <div onClick={(event) => handleClick(event, "ROCK")}>
            <Icons icon={ROCK} alt="rock-icon" clr="rgb(255, 40, 40)" />
          </div>
        </div>
      ) : (
        <div className="play">
          <div className="paper-scissors">
            <div className="device">
              <Icons
                icon={selectionMade.secondChoice.Image}
                alt={selectionMade.secondChoice.Id}
                clr={selectionMade.secondChoice.Color}
              />
            </div>
            <div className="player">
              <Icons
                icon={selectionMade.firstChoice[0].Image}
                alt={selectionMade.firstChoice[0].Id}
                clr={selectionMade.firstChoice[0].Color}
              />
            </div>
          </div>
          <div className="play-again">
            <button
              onClick={() => setSelectedIcon(false)}
              className="play_again_button"
            >
              PLAY AGAIN
            </button>
            <div className="result ">{result}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Move;
