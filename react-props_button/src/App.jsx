import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Button color="blue" disabled={false} text="Click Me" />
      <Button color="red" disabled={true} text="Disabled" />
      <Button color="green" disabled={false} text="Click Me" />
      <Button color="purple" disabled={false} text="Click Me" />
    </div>
  );
}

function Button({ color, disabled, text }) {
  const handleClick = () => {
    if (!disabled) {
      console.log(`Button clicked: ${text}`);
    }
  };
  return (
    <button
      style={{
        color: "black",
        backgroundColor: disabled ? "#d3d3d3" : color,
        height: "50px",
        borderRadius: "5px",
        padding: "20px",
        margin:"5px",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
      disabled={disabled}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}