import React from "react";
import ListItem from "./ListItem";

const List = ({ list }) => {
  const itemsList = list.map((x) => <ListItem key={x.id} item={x} />);
  console.log(list);

  return (
    <div>
      <h3>titel</h3>
      <ul>{itemsList}</ul>
    </div>
  );
};

export default List;
