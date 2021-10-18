import React from "react";
import ListItem from "./ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPlus, faDumpster } from "@fortawesome/free-solid-svg-icons";

function List(props) {
  const itemsList = props.list.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      title={props.title}
      handleDeleteItem={props.handleDeleteItem}
      clickItem={props.clickItem}
      createItem={props.createItem}
    />
  ));

  return (
    <div className="list-container">
      <h3>{props.title}</h3>
      <ul className="list">
        <li className="list-item-form">
          {props.title === "Boodschappenlijst" && (
            <form>
              <input type="text" id="newGLinput" name="text" />

              <div
                className="list-trashcan-part"
                onClick={() => props.handleDeleteItem(props.item, props.title)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </form>
          )}
          {props.title === "Winkelwagen" && (
            <div
              className="list-trashcan-part"
              onClick={() => props.handleDeleteItem(props.item, props.title)}
            >
              <FontAwesomeIcon icon={faDumpster} />
              Trash
            </div>
          )}
        </li>
      </ul>
      <ul className="list">{itemsList}</ul>
    </div>
  );
}

export default List;
