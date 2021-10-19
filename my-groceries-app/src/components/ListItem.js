import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ListItem(props) {
  return (
    <li key={props.id} id={props.id} className="list-item" value={props.title}>
      <div
        className="list-item-part"
        onClick={() => props.clickItem(props.item, props.title)}
      >
        {props.item.title} {props.item.amount !== 1 && props.item.amount}
      </div>
      {props.title === "Boodschappenlijst" && (
        <div
          className="list-trashcan-part"
          onClick={() => props.handleDeleteItem(props.item, props.title)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      )}
      {props.title === "Winkelwagen" && (
        <div className="list-trashcan-part">{props.item.amount}</div>
      )}
    </li>
  );
}

export default ListItem;
