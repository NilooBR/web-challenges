import "./Card.css";

export default function Card({ id, name, color, image }) {
  const colorClass = `card--${color.toLowerCase()}`;

  return (
    <div className={`card ${colorClass}`}>
      <h2>{name}</h2>
      <p>Color: {color}</p>
      <img src={image} alt={name} />
    </div>
  );
}
