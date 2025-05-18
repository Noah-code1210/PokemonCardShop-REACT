import React from "react";

function Search() {
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
                />
                <div className="search__bar--btn-wrapper">
                  <img
                    src="https://i.pinimg.com/736x/1e/eb/8f/1eeb8fcfdbbbae6b392779718f5d7701.jpg"
                    className="search__bar--btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
