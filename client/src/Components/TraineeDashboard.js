import React from "react";

class SelectMenu extends React.Component {
  render() {
    return (
      <select className="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">attandance</option>
        <option value="2">codility</option>
        <option value="3">codwars</option>
      </select>
    );
  }
}

export default SelectMenu;
