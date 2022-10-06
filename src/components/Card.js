import "../style/Card.css";

const Card = (props) => {
  const { animal, click } = props;

  return (
    <div 
      className="card" 
      onClick={(e) => click(animal.name)} >
        <img src={animal.img} alt={animal.name} />
        <p>{animal.name}</p>
    </div>
  );
};

export default Card;
