import React from "react";
import { Link } from "react-router-dom";

function Providers() {
  return (
    <section id="providers">
      <div className="store__slot">
        <div className="stores">
          <div className="store">
            <Link to="https://www.pokemoncenter.com/" target="_blank">
              <img
                src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/logo-pokemoncenter-2x.png"
                className="store__img"
              />
            </Link>
          </div>
          <div className="store">
            <Link to="https://www.walmart.com/search?q=pokemon+cards" target="_blank">
              <img
                src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/logo-walmart-2x.png"
                className="store__img"
              />
            </Link>
          </div>
          <div className="store">
            <Link to="http://target.com/s?searchTerm=pokemon+cards" target="_blank">
              <img
                src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/target-logo-red-2x.png"
                className="store__img"
              />
            </Link>
          </div>
          <div className="store">
            <Link to="https://www.gamestop.com/search/?q=pokemon+cards&lang=default&start=0&sz=20" target="_blank">
              <img
                src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/gamestop-black-2x.png"
                className="store__img"
              />
            </Link>
          </div>
          <div className="store">
            <Link to="https://www.bestbuy.com/site/searchpage.jsp?st=pokemon+cards&id=pcat17071" target="_blank">
              <img
                src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/logo-bestbuy-2x.png"
                className="store__img"
              />
            </Link>
          </div>
          <div className="store">
            <Link to="https://www.barnesandnoble.com/s/pokemon%20cards" target="_blank">
              <img
                src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/logo-barnesnoble-2x.png"
                className="store__img"
              />
            </Link>
          </div>
          <div className="store">
            <Link to="https://www.amazon.com/s?k=pokemon+cards&crid=19OZESETVKM5C&sprefix=pokemon+card%2Caps%2C98&ref=nb_sb_noss_1" target="_blank">
              <img
                src="https://tcg.pokemon.com/assets/img/where-to-buy/retailer-section/logo-amazon-black-2x.png"
                className="store__img"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Providers;
