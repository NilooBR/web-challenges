import { useState } from "react";
import Form from "./components/Form";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState({ name: "", email: "" });

  function handleCreateUser(name, email) {
    setUser({ name, email });
  }

  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onCreateUser={handleCreateUser} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{user.name || ""}</span>
      </p>
      <p>
        Email: <span className="output">{user.email || ""}</span>
      </p>
    </div>
  );
}