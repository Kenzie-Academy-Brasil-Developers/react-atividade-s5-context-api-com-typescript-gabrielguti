import React from "react";
import "./App.css";
import CartList from "./components/CartList";
import ProductsList from "./components/ProductsList";
function App() {
  return (
    <div className="Content">
      <ProductsList />
      <h2>Carrinho: </h2>
      <CartList />
    </div>
  );
}

export default App;
