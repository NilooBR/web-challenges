import Card from "./components/Card";

export default function App() {
  const fruits = [
    { 
      id: 1, 
      name: "Apple", 
      color: "Red", 
      image: "https://static.libertyprim.com/files/familles/pomme-large.jpg?1569271834" 
    },
    { 
      id: 2, 
      name: "Banana", 
      color: "Yellow", 
      image: "https://static.libertyprim.com/files/familles/banane-large.jpg?1569271268" 
    },
    { 
      id: 3, 
      name: "Grape", 
      color: "Purple", 
      image: "https://static.libertyprim.com/files/familles/raisin-large.jpg?1569271143" 
    },
    { 
      id: 4, 
      name: "Orange", 
      color: "Orange", 
      image: "https://static.libertyprim.com/files/familles/orange-large.jpg?1569271134" 
    },
    { 
      id: 5, 
      name: "Lemon", 
      color: "Green", 
      image: "https://static.libertyprim.com/files/familles/citron-large.jpg?1569271246" 
    }
  ];

  return (
    <div className="app">
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit.id}>
            <Card 
              id={fruit.id} 
              name={fruit.name} 
              color={fruit.color} 
              image={fruit.image} 
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
