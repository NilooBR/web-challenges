import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Smiley isHappy={true} />
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