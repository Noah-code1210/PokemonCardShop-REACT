import React from "react";
import PokemonCards from "../components/ui/PokemonCards";
import Sort from "../components/ui/Sort";

function Card() {
  return (
    <section id="card__header">
      <div className="card__background--img"></div>
      <div className="card__container">
        <div className="card__row">
          <div className="card__description">
            <h1 className="card__title">
              Browse your
              <br />
              Pokémon cards
            </h1>
          </div>
          <div className="search__bar--wrapper card__search-bar--wrapper">
            <input
              type="text"
              placeholder="Search for cards..."
              className="search__bar card__search-bar"
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
      <div className="pokemon__cards">
        <Sort />
        <PokemonCards />
      </div>
    </section>
  );
}

export default Card;
