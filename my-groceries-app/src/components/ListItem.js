import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Form(props) {
  return (
    <li className="list-item">
      <form>
        <input type="text" id="newGLinput" name="text" />
        <button type="submit">add</button>
      </form>
    </li>
  );
}

function ListItem(props) {
  console.log(props);
  return (
    <li key={props.id} id={props.id} className="list-item" value={props.title}>
      <div
        className="list-item-part"
        onClick={() => props.clickItem(props.item, props.title)}
      >
        {props.item.title}
      </div>
      {props.title === "Boodschappenlijst" && (
        <div
          className="list-trashcan-part"
          onClick={() => props.handleDeleteItem(props.item, props.title)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </div>
      )}
    </li>
  );
}

export default ListItem;
