import React from "react";

function Providers() {
  return (
    <section id="providers">
      <div className="store__slot">
        <div className="stores" onClick={() => alert(`Haven't implimented this feature yet, sorry :(`)
          }>
          <div className="store">
            <img
              src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/logo-pokemoncenter-2x.png"
              className="store__img"
            />
          </div>
          <div className="store">
            <img
              src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/logo-walmart-2x.png"
              className="store__img"
            />
          </div>
          <div className="store">
            <img
              src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/target-logo-red-2x.png"
              className="store__img"
            />
          </div>
          <div className="store">
            <img
              src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/gamestop-black-2x.png"
              className="store__img"
            />
          </div>
          <div className="store">
            <img
              src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/logo-bestbuy-2x.png"
              className="store__img"
            />
          </div>
          <div className="store">
            <img
              src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/logo-barnesnoble-2x.png"
              className="store__img"
            />
          </div>
          <div className="store">
            <img
              src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/logo-amazon-black-2x.png"
              className="store__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Providers;
