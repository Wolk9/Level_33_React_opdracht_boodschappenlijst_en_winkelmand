import React, { useState } from "react";
import List from "./List";
import groceryList from "./groceryList";
import shoppingCart from "./shoppingCart";

const Container = () => {
  const [groceryItem, setGroceryItem] = useState(groceryList);
  const [shoppingCartItem, setShoppingCartItem] = useState(shoppingCart);
  console.log(groceryItem);
  console.log(shoppingCart);

  const handleGroceryListChange = () => {
    console.log(setShoppingCartItem());
  };

  const handleShoppingCartChange = () => ({});

  return (
    <div className="list">
      <List
        title="Boodschappenlijst"
        className="list"
        list={groceryItem}
        onChange={handleGroceryListChange}
      />
      <List
        title="Winkelwagen"
        className="list"
        list={shoppingCartItem}
        onChange={handleShoppingCartChange}
      />
    </div>
  );
};

export default Container;
