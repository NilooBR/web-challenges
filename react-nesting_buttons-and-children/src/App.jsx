import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me first</Button>
      <Button>Click me second</Button>
      <Button>Click me third</Button>
      <Button>Click me fourth</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}