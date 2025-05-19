import React from "react";

function Header() {
  return (
    <header id="header">
      <div className="background__img"></div>
      <div className="header__container">
        <div className="header__description">
          <h1 className="header__title">
            Featured
            <br />
            EX-Cards
          </h1>
          <div className="featured__cards--wrapper">
            <img
              src="https://images.pokemontcg.io/xy12/1.png"
              className="featured__card--img"
            />
            <img
              src="https://images.pokemontcg.io/xy7/8.png"
              className="featured__card--img"
            />
            <img
              src="https://images.pokemontcg.io/xyp/XY07.png"
              className="featured__card--img"
            />
            <br />
            <img
              src="https://images.pokemontcg.io/g1/12.png"
              className="featured__card--img"
            />
            <img
              src="https://images.pokemontcg.io/xyp/XY08.png"
              className="featured__card--img"
            />
            <img
              src="https://images.pokemontcg.io/xyp/XY107.png"
              className="featured__card--img"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
