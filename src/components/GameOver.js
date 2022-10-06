import "../style/GameOver.css";

const GameOver = (props) => {
  const {isGameOver, reset} = props;

  if(!isGameOver) return null;

  return (
    <div className="game-over">
      <h2>{isGameOver === "won" ? "You Win!" : "Game Over!"}</h2>
      <button onClick={reset}>Try Again!</button>
    </div>
  );
};

export default GameOver;
