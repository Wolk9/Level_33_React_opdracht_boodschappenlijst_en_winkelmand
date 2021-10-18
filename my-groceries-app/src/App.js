// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  const [typeOfList] = useState("groceryList");
  return (
    <div className="App">
      <Container className="container" type={typeOfList} />
    </div>
  );
}

export default App;
