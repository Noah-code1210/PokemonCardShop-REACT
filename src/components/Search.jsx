import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Search() {
  // const {  } = useParams()
  const [search, setSearch] = useState()
  const navigate = useNavigate()

  function goToCard() {
    navigate('/card')
  }

  function onSearch() {
    goToCard()
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
                  type="search"
                  placeholder="Search for cards..."
                  className="search__bar"
                  onChange={(event) => setSearch(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      onSearch()
                    }
                  }}
                />
                <div className="search__bar--btn-wrapper">
                  <img
                    src="https://i.pinimg.com/736x/1e/eb/8f/1eeb8fcfdbbbae6b392779718f5d7701.jpg"
                    className="search__bar--btn"
                    onClick={goToCard}
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
