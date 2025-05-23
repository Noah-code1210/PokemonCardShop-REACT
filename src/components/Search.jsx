import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Search() {
const navigate = useNavigate()

function goToCard() {
  navigate('/card')
}

function goToExpansions() {
  navigate('/expansions')
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
              <div className="search__btn--wrapper">
                <button className="search__btn"
                onClick={goToCard}>Search Cards</button>
                <button className="search__btn"
                onClick={goToExpansions}>Expansions</button>
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
