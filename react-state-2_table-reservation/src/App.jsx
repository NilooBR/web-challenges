import { useState } from "react";
import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(2);

  const handleIncrement = () => {
    setPeople(people + 1);
  };

  const handleDecrement = () => {
    setPeople(people - 1);
  };

  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}