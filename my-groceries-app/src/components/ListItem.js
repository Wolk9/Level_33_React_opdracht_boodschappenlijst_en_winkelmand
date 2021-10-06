import React from "react";

const handleMouseClick = (id) => {
  console.log(id);
};

function ListItem({ item }) {
  return (
    <li
      id={item.id}
      className="list-item"
      value={item.title}
      onMouseEnter={console.log("klik")}
    >
      {item.title}
    </li>
  );
}

export default ListItem;
