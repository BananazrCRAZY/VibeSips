import { BrowserRouter, Routes, Route, Link, useParams } from "react-router-dom";
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

function CoffeeShopList() {
  const [coffeeShops, setCoffeeShops] = useState<CoffeeShop[]>([]);

  useEffect(() => {
    // http request to api endpoint
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
        <div key={shop.id}>
          <Link to={`/coffee-shops/${shop.id}`}>
            {shop.name}
          </Link>

          <p>{shop.city}</p>
        </div>
      ))}
    </>
  );
}

function CoffeeShopDetail() {
  const { shopId } = useParams();

  const [coffeeShop, setCoffeeShop] = useState<CoffeeShop | null>(null);

  useEffect(() => {
    fetch(`http://localhost:8000/coffee-shops/${shopId}`)
      .then((response) => response.json())
      .then((data) => {
        setCoffeeShop(data);
      });
  }, [shopId]);

  if (!coffeeShop) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Link to="/">← Back to coffee shops</Link>

      <h1>{coffeeShop.name}</h1>

      <p>City: {coffeeShop.city}</p>

      {coffeeShop.address && (
        <p>Address: {coffeeShop.address}</p>
      )}

      {coffeeShop.description && (
        <p>{coffeeShop.description}</p>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoffeeShopList />} />

        <Route
          path="/coffee-shops/:shopId"
          element={<CoffeeShopDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;