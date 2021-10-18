import { useState } from "react";

import List from "./List";
import groceryList from "./groceryList";
import shoppingCart from "./shoppingCart";

function Container() {
  const [groceryItems, setGroceryItems] = useState(groceryList);
  const [shoppingCartItem, setShoppingCartItem] = useState(shoppingCart);
  console.log("Container", groceryItems);
  console.log("Container", shoppingCart);

  // const handleGroceryListChange = (id) => {
  //   console.log("Grocery listChange", id.id);
  // };

  // const handleShoppingCartChange = (id) => {
  //   console.log("Shopping cart listChange", id.id);
  // };

  const createItem = () => {};

  const handleDeleteItem = (id, list) => {
    if (list === "Boodschappenlijst") {
      console.log("delete ", id);
      const newList = groceryItems.filter((item) => item.id !== id.id);
      setGroceryItems(newList);
    } else if (list === "Winkelwagen") {
      const newList = shoppingCartItem.filter((item) => item.id !== id.id);
      setShoppingCartItem(newList);
    }
  };

  const clickItem = (id, list) => {
    if (list === "Boodschappenlijst") {
      console.log("ClickItem", list, id);
      const newSLItem = groceryItems.filter((item) => item.id === id.id);
      const newSLIList = shoppingCartItem.concat(newSLItem);
      setShoppingCartItem(newSLIList);
      handleDeleteItem(id, list);
    } else if (list === "Winkelwagen") {
      console.log("ClickItem", list, id);
      const newGLItem = shoppingCartItem.filter((item) => item.id === id.id);
      const newGLList = groceryItems.concat(newGLItem);
      setGroceryItems(newGLList);
      handleDeleteItem(id, list);
    }
  };

  return (
    <div className="container">
      <List
        title="Boodschappenlijst"
        list={groceryItems}
        // onChange={handleGroceryListChange}
        handleDeleteItem={handleDeleteItem}
        clickItem={clickItem}
        createItem={createItem}
      />
      <List
        title="Winkelwagen"
        list={shoppingCartItem}
        clickItem={clickItem}
        // onChange={handleShoppingCartChange}
      />
    </div>
  );
}

export default Container;
