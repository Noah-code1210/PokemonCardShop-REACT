import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Search() {
  const { name } = useParams()
  const [search, setSearch] = useState(name)

  function onSearch() {
  }


  return (
    <section id="search">
      <div className="container">
        <div className="row">
          <div className="search--img">
            <div className="search__description">
              <h2 className="search__title">
                Search for any
                <br />
                of your desired cards
              </h2>
              <div className="search__bar--wrapper">
                <input
                  type="text"
                  placeholder="Search for cards..."
                  className="search__bar"
                  onChange={(event) => setSearch(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      <Link to="/card" />
                    }
                  }}
                />
                <div className="search__bar--btn-wrapper">
                  <img
                    src="https://i.pinimg.com/736x/1e/eb/8f/1eeb8fcfdbbbae6b392779718f5d7701.jpg"
                    className="search__bar--btn"
                    onClick={() => onSearch()}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="loading__state"></div>
        </div>
      </div>
    </section>
  );
}

export default Search;
