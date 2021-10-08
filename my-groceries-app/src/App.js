// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import groceryList from "./groceryList";
import shoppingCart from "./shoppingCart";

function App() {
  const [typeOfList] = useState("groceryList");
  return (
    <div className="App">
      <Container className="container" type={typeOfList} />
    </div>
  );
}

function Container() {
  const [groceryItem, setGroceryItem] = useState(groceryList);
  const [shoppingCartItem, setShoppingCartItem] = useState(shoppingCart);
  console.log("Container", groceryItem);
  console.log("Container", shoppingCart);

  const handleGroceryListChange = () => {
    console.log("Grocery listChange");
  };

  const handleShoppingCartChange = () => {
    console.log("Shopping cart listChange");
  };

  return (
    <div className="container">
      <List
        title="Boodschappenlijst"
        list={groceryItem}
        onChange={handleGroceryListChange}
      />
      <List
        title="Winkelwagen"
        list={shoppingCartItem}
        onChange={handleShoppingCartChange}
      />
    </div>
  );
}

function List({ list, title }) {
  const itemsList = list.map((x) => <ListItem key={x.id} item={x} />);

  return (
    <div className="list-container">
      <h3>{title}</h3>
      <ul className="list">{itemsList}</ul>
    </div>
  );
}

function ListItem({ item }) {
  const clickItem = (id) => {
    console.log(id);
  };

  return (
    <li
      key={item.id}
      id={item.id}
      className="list-item"
      value={item.title}
      onClick={clickItem}
    >
      {item.title}
    </li>
  );
}

export default App;
