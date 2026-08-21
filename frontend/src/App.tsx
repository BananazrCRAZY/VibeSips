import { useEffect, useState } from "react";
import "./App.css";

interface CoffeeShop {
  id: number;
  name: string;
  city: string;
  address: string | null;
  latitude: number | null;
  longitude: number | null;
  description: string | null;
}

function App() {
  const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>([]);
  const [selectedShop, setSelectedShop] = useState<CoffeeShop | null>(null);

  useEffect(() => {
    // http request to api endpoint
    fetch("http://localhost:8000/coffee-shops")
      .then((response) => response.json())
      .then((data) => {
        setCoffeeShops(data);
      });
  }, []);

  function handleShopClick(shopId: number) {
    fetch(`http://localhost:8000/coffee-shops/${shopId}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedShop(data);
      });
  }

  return (
    <>
      <h1>VibeSips</h1>

      <h2>Coffee Shops</h2>

      {coffeeShops.map((shop) => (
        <div key={shop.id}>
          <button onClick={() => handleShopClick(shop.id)}>
            {shop.name}
          </button>
          <p>{shop.city}</p>
        </div>
      ))}

      {selectedShop && (
        <section>
          <h2>{selectedShop.name}</h2>

          <p>City: {selectedShop.city}</p>

          {selectedShop.address && (
            <p>Address: {selectedShop.address}</p>
          )}

          {selectedShop.description && (
            <p>{selectedShop.description}</p>
          )}
        </section>
      )}
    </>
  );
}

export default App;