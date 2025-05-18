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
        <div className="divider__wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 304 29"
            fill="none"
            class="horizontal-rule"
            aria-hidden="true"
          >
            <path
              fill="url(#hr-gradient-left)"
              d="M3 10.3387H132V13.6678H7.99355L3 10.3387Z"
            ></path>
            <path
              fill="url(#hr-gradient-left)"
              d="M9.2417 15.3323L132 15.3323V18.6613H14.2352L9.2417 15.3323Z"
            ></path>
            <path
              fill="#F7B0C2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M157.493 13.5667C156.905 11.0093 154.677 9.10067 152.001 9.10067C149.324 9.10067 147.095 11.0093 146.507 13.5667H138C138.648 6.2428 144.66 0.5 152.001 0.5C159.34 0.5 165.352 6.2428 166 13.5667H157.493ZM152 17.7573C150.2 17.7573 148.743 16.2985 148.743 14.5C148.743 12.7015 150.2 11.2427 152 11.2427C153.799 11.2427 155.257 12.7015 155.257 14.5C155.257 16.2985 153.799 17.7573 152 17.7573ZM152 28.5C144.658 28.5 138.645 22.7553 138 15.4333H146.505C147.093 17.9907 149.323 19.8993 152 19.8993C154.677 19.8993 156.906 17.9907 157.495 15.4333H166C165.355 22.7553 159.342 28.5 152 28.5Z"
            ></path>
            <path
              fill="url(#hr-gradient-right)"
              d="M301 10.3387H172V13.6678H296.006L301 10.3387Z"
            ></path>
            <path
              fill="url(#hr-gradient-right)"
              d="M294.758 15.3323L172 15.3323V18.6613H289.765L294.758 15.3323Z"
            ></path>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
