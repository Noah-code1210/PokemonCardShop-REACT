import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

function Card() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [sortedPokemon, setSortedPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(id);

  function onSearch() {
    fetchPokemon(search);
  }

  async function fetchPokemon(query) {
    const { data } = await axios.get(
      `https://api.pokemontcg.io/v2/cards?q=name:${query}`);
    setPokemon(data.data);
    setSortedPokemon(data.data); // Initialize sortedPokemon with all pokemon
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  function handleSort(filter) {
    let sortedCards = [...pokemon]; // Create a copy of the original pokemon array

    if (filter === "LOW_TO_HIGH") {
      sortedCards.sort((a, b) => a.hp - b.hp);
    } else if (filter === "HIGH_TO_LOW") {
      sortedCards.sort((a, b) => b.hp - a.hp);
    } else if (filter === "TYPE") {
      sortedCards.sort((a, b) => {
        if (a.types[0] < b.types[0]) return -1;
        if (a.types[0] > b.types[0]) return 1;
      });
    } else if (filter === "SUB-TYPE") {
      sortedCards.sort((a, b) => {
        if (a.subtypes[0] < b.subtypes[0]) return -1;
        if (a.subtypes[0] > b.subtypes[0]) return 1;
      });
    }
    setSortedPokemon(sortedCards);
  }

  return (
    <>
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
                onChange={(event) => setSearch(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    onSearch();
                  }
                }}
              />
              <div className="search__bar--btn-wrapper">
                <img
                  src="https://i.pinimg.com/736x/1e/eb/8f/1eeb8fcfdbbbae6b392779718f5d7701.jpg"
                  className="search__bar--btn"
                  onClick={() => onSearch()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {loading ? (
        <section id="loading">
          <div className="loading__state">
            <FontAwesomeIcon icon="spinner" className="loader" />
          </div>
        </section>
      ) : (
        <>
          <div className="shopping__row">
            <div className="shopping__title">Search results:</div>

            <select
              id="price__filter"
              defaultValue="DEFAULT"
              onChange={(event) => handleSort(event.target.value)}
            >
              <option value="DEFAULT" disabled>
                Sort
              </option>

              <option value="LOW_TO_HIGH">Health, Low to High</option>

              <option value="HIGH_TO_LOW">Health, High to Low</option>

              <option value="TYPE">Type</option>

              <option value="SUB-TYPE">Sub-type</option>
            </select>
          </div>

          <div className="pokemon__wrapper">
            {sortedPokemon.map((pokemon, index) => (
              <div id="pokemon" key={index}>
                <div className="pokemon__list">
                  <div className="pokemon__slot">
                    <div className="pokemon__slot--description">
                      <img
                        className="pokemon__img"
                        src={pokemon.images.small}
                      />
                      <h3 className="pokemon__name">Name: {pokemon.name}</h3>
                      <p className="pokemon__info">
                        <b>Type: </b>
                        {pokemon.types}
                      </p>
                      <p className="pokemon__info">
                        <b>Sub-type: </b>
                        {pokemon.subtypes}
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
        </>
      )}
    </>
  );
}

export default Card;
