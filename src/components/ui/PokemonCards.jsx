import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PokemonCards() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      const { data } = await axios.get(`https://api.pokemontcg.io/v2/cards`);
      setPokemon(data.data);
      setLoading(false);
    }
    fetchPokemon();
  }, []);

  return (
    <>
      {loading ? (
        <section id="loading">
          <div className="loading__state">
            <FontAwesomeIcon icon="spinner" className="loader" />
          </div>
        </section>
      ) : (
        <div className="pokemon__wrapper">
          {pokemon.map((pokemon) => (
            <div id="pokemon">
              <div className="pokemon__list">
                <div className="pokemon__slot">
                  <div className="pokemon__slot--description">
                    <img className="pokemon__img" src={pokemon.images.small} />
                    <h3 className="pokemon__name">Name: {pokemon.name}</h3>
                    <p className="pokemon__info">
                      <b>Type: </b> {pokemon.types}
                    </p>
                    <p className="pokemon__info">
                      <b>Sub-type: </b> {pokemon.subtypes}
                    </p>
                    <p className="pokemon__info">
                      <b>Health: </b> {pokemon.hp}
                    </p>
                    <p className="pokemon__info">
                      <b>Rarity: </b> {pokemon.rarity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default PokemonCards;
