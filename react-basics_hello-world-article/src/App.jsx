import React from "react";
import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World Article!</h1>
      <p>It is fun to use React 🦄</p>
    </article>
  );
}

export default function App() {
  return (
    <div>
      <HelloWorldArticle />
    </div>
  );
}