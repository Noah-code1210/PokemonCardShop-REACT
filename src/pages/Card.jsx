import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import NoResults from "../images/NoResults.png";

function Card() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [sortedPokemon, setSortedPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(id || ""); // Initialize with id or empty string
  const navigate = useNavigate()

  // Function to fetch Pokémon data
  async function fetchPokemon(query) {
    if (!query) {
      // Prevent fetching with an empty query
      setLoading(false);
      setPokemon([]);
      setSortedPokemon([]);
      return;
    }
    setLoading(true); // Set loading to true when starting a new fetch
    try {
      const { data } = await axios.get(
        `https://api.pokemontcg.io/v2/cards?q=name:${query}`
      );
      setPokemon(data.data);
      setSortedPokemon(data.data); // Initialize sortedPokemon with all pokemon
    } catch (error) {
      console.error("Error fetching Pokemon:", error);
      setPokemon([]);
      setSortedPokemon([]);
    } finally {
      setLoading(false); // Set loading to false after fetch (success or error)
    }
  }

  // Effect to fetch Pokémon on initial load or when 'id' from URL changes
  useEffect(() => {
    if (id) {
      setSearch(id); // Ensure search input reflects the URL ID
      fetchPokemon(id); // Fetch using the ID from the URL
    } else {
      setLoading(false); // If no ID, no initial fetch needed
    }
  }, [id]); // Dependency array: re-run if 'id' changes

  // Function to handle the search button/enter key press
  function onSearch() {
    fetchPokemon(search);
  }

  function handleSort(filter) {
    let sortedCards = [...pokemon]; // Create a copy of the original pokemon array

    if (filter === "LOW_TO_HIGH") {
      sortedCards.sort((a, b) => (a.hp || 0) - (b.hp || 0)); // Handle potential undefined HP
    } else if (filter === "HIGH_TO_LOW") {
      sortedCards.sort((a, b) => (b.hp || 0) - (a.hp || 0)); // Handle potential undefined HP
    } else if (filter === "TYPE") {
      sortedCards.sort((a, b) => {
        const typeA = a.types && a.types.length > 0 ? a.types[0] : "";
        const typeB = b.types && b.types.length > 0 ? b.types[0] : "";
        return typeA.localeCompare(typeB);
      });
    } else if (filter === "SUB-TYPE") {
      sortedCards.sort((a, b) => {
        const subTypeB =
          b.subtypes && b.subtypes.length > 0 ? b.subtypes[0] : "";
        const subTypeA =
          a.subtypes && a.subtypes.length > 0 ? a.subtypes[0] : "";
        return subTypeB.localeCompare(subTypeA);
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
                value={search} // Bind input value to search state
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
                  alt="Search" // Add alt text for accessibility
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
            <FontAwesomeIcon icon="spinner" className="loader" spin />{" "}
            {/* Add spin prop */}
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
              <option value="DEFAULT">Sort</option>
              <option value="LOW_TO_HIGH">Health, Low to High</option>
              <option value="HIGH_TO_LOW">Health, High to Low</option>
              <option value="TYPE">Type</option>
              <option value="SUB-TYPE">Sub-type</option>
            </select>
          </div>

          <div className="pokemon__wrapper">
            {sortedPokemon.length > 0 ? ( // Display cards only if available
              sortedPokemon.map((pokemon) => (
                <div id="pokemon" >
                  <div className="pokemon__list">
                    <div className="pokemon__slot">
                      <div className="pokemon__slot--description">
                        <figure className="pokemon__img--wrapper">
                            <img
                              className="pokemon__img"
                              src={pokemon.images?.small} // Use optional chaining
                              alt={pokemon.name} // Add alt text for accessibility
                              key={pokemon.id}
                              onClick={() => navigate(`/cards/${pokemon.id}`)}
                            />
                          <h2 className="img__hover-text">
                            Learn
                            <br />
                            More
                            <br />→
                          </h2>
                        </figure>
                        <h3 className="pokemon__name">Name: {pokemon.name}</h3>
                        <p className="pokemon__info">
                          <b>Type: </b>
                          {pokemon.types?.join(", ") || "N/A"}{" "}
                          {/* Handle array and potential undefined */}
                        </p>
                        <p className="pokemon__info">
                          <b>Sub-type: </b>
                          {pokemon.subtypes?.join(", ") || "N/A"}{" "}
                          {/* Handle array and potential undefined */}
                        </p>
                        <p className="pokemon__info">
                          <b>Health: </b> {pokemon.hp || "N/A"}{" "}
                          {/* Handle potential undefined HP */}
                        </p>
                        <p className="pokemon__info">
                          <b>Rarity: </b> {pokemon.rarity || "N/A"}{" "}
                          {/* Handle potential undefined rarity */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <img src={NoResults} alt="" className="no__results--img" />
                <h2 className="no__results--title">
                  You have not searched for any Pokémon yet!
                </h2>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Card;
