import React from "react";

function Nav() {
  return (
    <section id="nav">
      <div className="nav__container">
        <div className="nav__img--wrapper">
          <img src="https://tcg.pokemon.com/assets/img/global/logos/en-us/tcg-logo-2x.png" className="nav__img" />
        </div>
        <ul className="nav__link--list">
          <li className="nav__link nav__link--hover-effect">
            <a href="/">Home</a>
          </li>
          <li className="nav__link nav__link--hover-effect">
            <a href="/card">Find Your Card</a>
          </li>
          <li className="nav__link nav__link--hover-effect">
            <a href="/buy">Where to Buy?</a>
          </li>
          <li className="nav__link">
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Nav;
