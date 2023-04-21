import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

const initialSpicyFoods = [
  { id: 1, name: "Buffalo Wings", cuisine: "American", heatLevel: 3 },
  { id: 2, name: "Mapo Tofu", cuisine: "Sichuan", heatLevel: 6 },
];

const initialNextId = 3;

const initialNewSpicyFoods = [
  { name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  { name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  { name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
];

function App() {
  const [spicyFoods, setSpicyFoods] = useState(initialSpicyFoods);
  const [nextId, setNextId] = useState(initialNextId);
  const [newSpicyFoods] = useState(initialNewSpicyFoods);

  // Get one random spicy food from the array
  function getNewRandomSpicyFood() {
    const index = Math.floor(Math.random() * newSpicyFoods.length);
    const newSpicyFood = { ...newSpicyFoods[index] };
    newSpicyFood.id = nextId;
    setNextId(nextId + 1);
    return newSpicyFood;
  }

  return (
    <div>
      <h1>Spicy Foods</h1>
      <ul>
        {spicyFoods.map((food) => (
          <li key={food.id}>
            {food.name} ({food.cuisine}, heat level: {food.heatLevel})
          </li>
        ))}
      </ul>
      <button onClick={getNewRandomSpicyFood}>Add Random Spicy Food</button>
    </div>
  );
}

export default App;
