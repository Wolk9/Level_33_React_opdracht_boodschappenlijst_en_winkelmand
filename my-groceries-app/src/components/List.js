import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    return (
      <div>
        <ul>
          <ListItem title="Koffie" />
          <ListItem title="Melk" />
          <ListItem title="Kandij" />
          <ListItem title="Suiker" />
        </ul>
      </div>
    );
  }
}
export default List;
