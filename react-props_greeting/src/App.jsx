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
  const coaches = ["Klaus", "Pete", "Gimena","Felix","Andrea"]
  const isCoach = coaches.includes(name);

  console.log(isCoach);
  console.log(coaches);
  console.log("isCoach: ", name, isCoach);
  return (
    <h1>
      Hello, {isCoach ? "Couch" : name}!
    </h1>
  );
}