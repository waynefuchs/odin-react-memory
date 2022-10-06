import startingAnimals from "../img/images";
import Card from "./Card";
import Score from "./Score";
import GameOver from "./GameOver";
import "../style/GameBoard.css";
import { useState } from "react";

const GameBoard = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [chosenCards, setChosenCards] = useState([]);
  const [animals, setAnimals] = useState(startingAnimals);
  const [isGameOver, setIsGameOver] = useState(false);

  const setWinCondition = (score) => {
    setIsGameOver("won");
    setBestScore(score);
  }

  const resetGame = () => {
    setScore(0);
    setChosenCards([]);
    setAnimals(startingAnimals);
    setIsGameOver(false);
  }

  const cardClicked = (name) => {
    if (chosenCards.includes(name)) {
      if(score > bestScore) setBestScore(score);
      setIsGameOver(true);
      return null;
    }

    if(score + 1 === animals.length) setWinCondition(score + 1);

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
      <Score score={score} bestScore={bestScore} />
      <GameOver isGameOver={isGameOver} reset={resetGame} />
      <div className="game-board">
        {animals.map((a) => (
          <Card 
            animal={a} 
            click={cardClicked}
            key={a.id} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
