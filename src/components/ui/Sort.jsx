import React from "react";

function Sort() {
  return (
    <div>
      <div className="shopping__row">
        <div className="shopping__title">Search results:</div>
        <select id="price__filter">
          <option value disabled selected>
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
