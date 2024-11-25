import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={2} valueB={3} />
      <Sum valueA={100} valueB={234} />
      <Sum valueA={24} valueB={17} />
      <Sum valueA={12} valueB={28} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <div>
      <span>
        {valueA} + {valueB} = {valueA + valueB}
      </span>
    </div>
  );
}