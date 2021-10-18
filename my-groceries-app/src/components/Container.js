import { useState } from "react";

import List from "./List";
import groceryList from "./groceryList";
import shoppingCart from "./shoppingCart";

function Container() {
  const [groceryItems, setGroceryItems] = useState(groceryList);
  const [shoppingCartItem, setShoppingCartItem] = useState(shoppingCart);
  console.log("Container", groceryItems);
  console.log("Container", shoppingCart);

  const handleGroceryListChange = (id) => {
    console.log("Grocery listChange", id.id);
  };

  const handleShoppingCartChange = (id) => {
    console.log("Shopping cart listChange", id.id);
  };

  const handleDeleteItem = (id) => {
    console.log("delete ", id);
    const newList = groceryItems.filter((item) => item.id != id.id);
    setGroceryItems(newList);
  };

  const clickItem = (id) => {
    console.log("ClickItem", id);
  };

  return (
    <div className="container">
      <List
        title="Boodschappenlijst"
        list={groceryItems}
        onChange={handleGroceryListChange}
        handleDeleteItem={handleDeleteItem}
        clickItem={clickItem}
      />
      <List
        title="Winkelwagen"
        list={shoppingCartItem}
        onChange={handleShoppingCartChange}
      />
    </div>
  );
}
export default Container;
