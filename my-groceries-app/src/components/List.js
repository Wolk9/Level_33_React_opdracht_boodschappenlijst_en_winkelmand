import React from "react";
import ListItem from "./ListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faDumpster,
  faShoppingCart,
  faClipboardList
} from "@fortawesome/free-solid-svg-icons";

function FirstElementOfList(props) {
  props = props.props;
  return (
    <li className="list-item-form">
      {props.title === "Boodschappenlijst" && (
        <>
          <form onSubmit={props.createItem}>
            <input
              value={props.userInput}
              type="text"
              id="newGLinput"
              name="text"
              onChange={props.handleChange}
              placeholder="Wat mist er nog?"
            />
          </form>
          <div
            className="list-trashcan-part"
            onClick={() => props.addItem(props.userInput)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </>
      )}
      {props.title === "Winkelwagen" && (
        <>
          <div>TrashAll</div>
          <div
            className="list-trashcan-part"
            onClick={() => props.handleDeleteAll(props.title)}
          >
            <FontAwesomeIcon icon={faDumpster} />
          </div>
        </>
      )}
    </li>
  );
}

function List(props) {
  const itemsList = props.list.map((item) => (
    <ListItem
      key={item.id}
      item={item}
      title={props.title}
      handleDeleteItem={props.handleDeleteItem}
      clickItem={props.clickItem}
      createItem={props.createItem}
      addItem={props.addItem}
      badInput={props.badInput}
    />
  ));

  return (
    <div
      className={
        props.badInput === true ? "list-container badinput" : "list-container"
      }
    >
      <h3>
        {props.title} {props.title === "Winkelwagen" && props.list.length}
      </h3>
      <ul className="list">
        <FirstElementOfList props={props} />
        {props.list.length !== 0 ? (
          itemsList
        ) : props.title === "Winkelwagen" ? (
          <FontAwesomeIcon className="big-icon" icon={faShoppingCart} />
        ) : (
          <FontAwesomeIcon className="big-icon" icon={faClipboardList} />
        )}
      </ul>
    </div>
  );
}

export default List;
