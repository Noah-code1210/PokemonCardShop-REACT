import React from "react";

function Expansions() {
  return (
    <div id="expansions">
      <div className="ex__background--img"></div>
      <div className="ex__description">
        <img src="https://tcg.pokemon.com/assets/img/sv-expansions/destined-rivals/logo/en-us/sv10-logo-2x.png" alt="" className="ex__title--img" />
        <h2 className="ex__title">
          Coming Soon
        </h2>
        <button className="ex__btn">
          Explore
        </button>
      </div>
      <div id="featured__bundles">
        <div className="featured__bundles--title">
          Featured Bundles
        </div>
        <div className="featured__slots">
          <div className="featured__slot">
            <div className="featured__slot--description">
              <img src="https://tcg.pokemon.com/assets/img/sv-expansions/destined-rivals/collections/en-us/sv10-etb-pc-en-2x.png" alt="" className="featured__img" />
              <h2 className="featured__title">
                Pokémon TCG: 
              </h2>
              <p className="featured__para">
              Scarlet & Violet -- Destined Rivals Pokemon Center 
              Elite Trainer Box
              </p>
              <button className="shop__btn">
                Shop at Pokémon Center
              </button>
            </div>
          </div>

          <div className="featured__slot">
            <div className="featured__slot--description">
              <img src="https://tcg.pokemon.com/assets/img/sv-expansions/destined-rivals/collections/en-us/sv10-etb-en-2x.png" alt="" className="featured__img" />
              <h2 className="featured__title">
                Pokémon TCG: 
              </h2>
              <p className="featured__para">
              Scarlet & Violet -- Destined Rivals 
              Elite Trainer Box
              </p>
              <button className="shop__btn">
                Shop at Pokémon Center
              </button>
            </div>
          </div>

          <div className="featured__slot">
            <div className="featured__slot--description">
              <img src="https://tcg.pokemon.com/assets/img/sv-expansions/destined-rivals/collections/en-us/sv10-build-battle-en-2x.png" alt="" className="featured__img" />
              <h2 className="featured__title">
                Pokémon TCG: 
              </h2>
              <p className="featured__para">
              Scarlet & Violet -- Destined Rivals Build & Battle Box
              </p>
              <button className="shop__btn">
                Shop at Pokémon Center
              </button>
            </div>
          </div>

          <div className="featured__slot">
            <div className="featured__slot--description">
              <img src="https://tcg.pokemon.com/assets/img/sv-expansions/destined-rivals/collections/en-us/sv10-booster-bundle-en-2x.png" alt="" className="featured__img" />
              <h2 className="featured__title">
                Pokémon TCG: 
              </h2>
              <p className="featured__para">
              Scarlet & Violet -- Destined Rivals Booster Bundle
              </p>
              <button className="shop__btn">
                Shop at Pokémon Center
              </button>
            </div>
          </div>
          
          <div className="featured__slot">
            <div className="featured__slot--description">
              <img src="https://tcg.pokemon.com/assets/img/sv-expansions/destined-rivals/collections/en-us/sv10-sleeved-boosters-en-2x.png" alt="" className="featured__img" />
              <h2 className="featured__title">
                Pokémon TCG: 
              </h2>
              <p className="featured__para">
              Scarlet & Violet -- Destined Rivals Sleeved Booster Pack
              </p>
              <button className="shop__btn">
                Shop at Pokémon Center
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expansions;
