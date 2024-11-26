import { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode(code + emoji);
    console.log(emoji);
    console.log(code);
  }

  function handleReset() {
    setCode("");
    console.log("Reset Code!");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <p>{code}</p>
      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}