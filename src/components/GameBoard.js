import startingAnimals from "../img/images";
import Card from "./Card";
import Score from "./Score";
import GameOver from "./GameOver";
import "../style/GameBoard.css";
import { useState } from "react";

const GameBoard = () => {
  const [score, setScore] = useState(0);
  const [chosenCards, setChosenCards] = useState([]);
  const [animals, setAnimals] = useState(startingAnimals);

  const cardClicked = (name) => {
    if (chosenCards.includes(name)) {
      console.log("Game Over");
      return null;
    }

    setScore(score + 1);
    setChosenCards(chosenCards.concat(name));
    setAnimals(
      animals
        .map((v) => ({ v, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ v }) => v)
    );
  };

  return (
    <div className="memory">
      <h1>Memory</h1>
      <Score score={score} />
      <GameOver />
      <div className="game-board">
        {animals.map((a) => (
          <Card animal={a} click={cardClicked} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
