console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data); //log the entire data object

  // Log details of the first person
  console.log("First Person:", data.results[0]);

  // Log names of all people
  const names = data.results.map((person) => person.name);
  console.log("Names of People:", names);

  // Log eye color of R2-D2
  const r2d2 = data.results.find((person) => person.name === "R2-D2");
  if (r2d2) {
    console.log("R2-D2 Eye color :", r2d2.eye_color);
  } else {
    console.log("R2-D2 Eye color not found!");
  }
}

fetchData();
