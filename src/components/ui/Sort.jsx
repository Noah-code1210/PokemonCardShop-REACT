import React, { useState } from "react";

function Sort() {
  const [card, setCard] = useState([]);

  function filterCards(filter) {
    if (filter === "LOW_TO_HIGH") {
      setCard([...card].sort((a, b) => a.hp - b.hp));
    } else if (filter === "HIGH_TO_LOW") {
      setCard([...card].sort((a, b) => b.hp - a.hp));
    }
  }

  return (
    <div>
      <div className="shopping__row">
        <div className="shopping__title">Search results:</div>
        <select
          id="price__filter"
          defaultValue="DEFAULT"
          onChange={(event) => filterCards(event.target.value)}
        >
          <option value="DEFAULT" disabled>
            Sort
          </option>
          <option value="LOW_TO_HIGH">Health, Low to High</option>
          <option value="HIGH_TO_LOW">Health, High to Low</option>
          <option value="TYPE">Type</option>
          <option value="SUB-TYPE">Sub-type</option>
        </select>
      </div>
    </div>
  );
}

export default Sort;
