import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy />
      <Smiley isHappy={false} />
    </div>
  );
}

function Smiley({ isHappy }) {
  const handleClick = () => {
    console.log(isHappy ? "Happy" : "Sad");
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer"}}>
      {isHappy ? "😃" : "😩"}
    </div>
  );
}