import React from "react";
import ListItem from "./ListItem";

function List(props) {
  const itemsList = props.list.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      title={props.title}
      handleDeleteItem={props.handleDeleteItem}
      clickItem={props.clickItem}
    />
  ));

  return (
    <div className="list-container">
      <h3>{props.title}</h3>
      <ul className="list">{itemsList}</ul>
    </div>
  );
}

export default List;
