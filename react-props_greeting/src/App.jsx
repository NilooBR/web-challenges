import "./styles.css";

export default function App() {
  return (
    <div>
      <Greeting name="Peter" />
      <Greeting name="Klaus" />
    </div>
  );
}

function Greeting({ name }) {
  return (
    <h1>
      {name === "Coach" ? "Hello, Coach!" : `Hello, ${name}!`}
    </h1>
  );
}