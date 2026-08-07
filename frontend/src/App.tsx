import { useEffect, useState } from "react";
import './App.css'

interface CoffeShop {
  id: number;
  name: string;
  city: string;
}

function App() {

  const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/coffee-shops")
      .then((response) => response.json())
      .then((data) => {
        setCoffeeShops(data);
      });
  }, []);

  return (
    <>
      <h1>VibeSips</h1>

      <h2>Coffee Shops</h2>

      {coffeeShops.map((shop) => (
        <div key = {shop.id}>
          <h3>{shop.name}</h3>
          <p>{shop.city}</p>
        </div>
      ))}
    </>
  )
}

export default App
