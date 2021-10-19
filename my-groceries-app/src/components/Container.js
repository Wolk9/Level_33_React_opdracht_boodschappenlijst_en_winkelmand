import { useState } from "react";

import List from "./List";
import groceryList from "./groceryList";
import shoppingCart from "./shoppingCart";

function Container() {
  const [groceryItems, setGroceryItems] = useState(groceryList);
  const [shoppingCartItems, setShoppingCartItems] = useState(shoppingCart);
  const [userInput, setUserInput] = useState("");
  const [badInput, setBadInput] = useState(false);

  const handleDeleteAll = (list) => {
    if (list === "Winkelwagen") {
      setShoppingCartItems([]);
    }
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const createItem = (e) => {
    e.preventDefault();
    addItem(userInput);
  };

  const addItem = (userInput) => {
    if (userInput !== "") {
      const copy = [...groceryItems];
      const timestamp = new Date().getTime() * Math.random();
      const isItemUnique = groceryItems.find(
        (item) => userInput === item.title
      );
      const indexofUniqueItem = groceryItems.findIndex(
        (item) => userInput === item.title
      );
      if (isItemUnique !== undefined || NaN) {
        groceryItems[indexofUniqueItem].amount =
          groceryItems[indexofUniqueItem].amount + 1;
        groceryItems[indexofUniqueItem].id = timestamp;
        setUserInput("");
      } else {
        const newList = [
          ...copy,
          { id: timestamp, title: userInput, amount: 1 }
        ];
        setGroceryItems(newList);
        setUserInput("");
      }
    } else {
      setBadInput(true);
      setTimeout(() => {
        setBadInput(false);
      }, 1000);
    }
    console.log(groceryItems);
  };

  const handleDeleteItem = (id, list) => {
    if (list === "Boodschappenlijst") {
      const newList = groceryItems.filter((item) => item.id !== id.id);
      setGroceryItems(newList);
    } else if (list === "Winkelwagen") {
      const newList = shoppingCartItems.filter((item) => item.id !== id.id);
      setShoppingCartItems(newList);
    }
  };

  const clickItem = (id, list) => {
    // Maak een uniek id bij elke change
    const timestamp = new Date().getTime() * Math.random();
    id.id = timestamp;
    // Op welke list wordt er op een item geklikt?
    if (list === "Boodschappenlijst") {
      // check of item al bestaat in SC
      const itemToChallenge = shoppingCartItems.find(
        (item) => item.title === id.title
      );
      const indexOfitem = shoppingCartItems.findIndex(
        (item) => item.title === id.title
      );
      // zo ja, amount + 1 van Item in SC, haal item weg uit GL
      if (itemToChallenge !== undefined || NaN) {
        itemToChallenge[indexOfitem].amount =
          itemToChallenge[indexOfitem].amount + 1;
        handleDeleteItem(id, list);
      } else {
        // zo nee, maak item aan in SC, haal item weg uit GL
        const newSCItem = id;
        const newSCList = shoppingCartItems.concat(newSCItem);
        setShoppingCartItems(newSCList);
        handleDeleteItem(id, list);
      }
      // return handleDeleteItem(id, list);
    } else if (list === "Winkelwagen") {
      // check of item al bestaat in GL
      const itemToChallenge = groceryItems.find(
        (item) => item.title === id.title
      );
      const indexOfitem = shoppingCartItems.findIndex(
        (item) => item.title === id.title
      );
      // zo ja, amount + 1 van Item in GL, haal item weg uit SC
      if (itemToChallenge !== undefined || NaN) {
        itemToChallenge[indexOfitem].amount =
          itemToChallenge[indexOfitem].amount + 1;
        handleDeleteItem(id, list);
      } else {
        // zo nee, maak een item aan in GL, haal item weg uit SC
        const newGLItem = id;
        const newGLList = groceryItems.concat(newGLItem);
        setGroceryItems(newGLList);
        handleDeleteItem(id, list);
      }
    }
  };

  return (
    <div>
      <h2>Boodschappenlijstje</h2>
      <div className="container">
        <List
          title="Boodschappenlijst"
          list={groceryItems}
          // onChange={handleGroceryListChange}
          handleDeleteItem={handleDeleteItem}
          clickItem={clickItem}
          createItem={createItem}
          addItem={addItem}
          handleChange={handleChange}
          userInput={userInput}
          badInput={badInput}
        />
        <List
          title="Winkelwagen"
          list={shoppingCartItems}
          clickItem={clickItem}
          handleDeleteAll={handleDeleteAll}
          // onChange={handleShoppingCartChange}
          badInput={badInput}
        />
      </div>
    </div>
  );
}

export default Container;
