import "../style/Score.css";

const Score = (props) => {
  const { score } = props;

  return (
    <div className="scorecard">
      <div className="score">
        <h2>Score</h2>
        <h2>{score}</h2>
      </div>
    </div>
  );
};

export default Score;
