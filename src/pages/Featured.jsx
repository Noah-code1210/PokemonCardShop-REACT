import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";

function Featured() {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortedPokemon, setSortedPokemon] = useState([]);

  async function fetchPokemon() {
    const { data } = await axios.get(`https://api.pokemontcg.io/v2/cards`);
    console.log(data.data);
    setPokemon(data.data);
    setSortedPokemon([]);
    setLoading(false);
  }

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  function handleSort(filter) {
    let sortedCards = [...pokemon];

    if (filter === "SUB-TYPE") {
      sortedCards.sort((a, b) => {
        const subTypeB =
          b.subtypes && b.subtypes.length > 0 ? b.subtypes[0] : "";
        const subTypeA =
          a.subtypes && a.subtypes.length > 0 ? a.subtypes[0] : "";
        return subTypeB.localeCompare(subTypeA);
      });
    } else if (filter === "TYPE") {
      sortedCards.sort((a, b) => {
        const typeA = a.types && a.types.length > 0 ? a.types[0] : "";
        const typeB = b.types && b.types.length > 0 ? b.types[0] : "";
        return typeA.localeCompare(typeB);
      });
    }
    setSortedPokemon(sortedCards);
  }

  return (
    <>
      <div id="featured">
        <div className="featured__cards--title">Our Rarest Cards!</div>
        <select
          id="rarity__filter"
          defaultValue="DEFAULT"
          onChange={(event) => handleSort(event.target.value)}
        >
          <option value="DEFAULT" disabled>
            Sort
          </option>
          <option value="TYPE">Type</option>
          <option value="SUB-TYPE">Sub-type</option>
        </select>
        {loading ? (
          <section id="loading">
            <div className="loading__state">
              <FontAwesomeIcon icon="spinner" className="loader" spin />{" "}
              {/* Add spin prop */}
            </div>
          </section>
        ) : (
          <div className="slot__wrapper">
            {sortedPokemon.map((pokemon, index) => {
              return (
                <div className="slot" key={index}>
                  <div className="slot__description">
                    <figure className="img__wrapper">
                      <img
                        src={pokemon.images.small}
                        alt=""
                        className="featured__img"
                      />
                      <h2 className="featured__img--title">
                        Name: {pokemon.name}
                      </h2>
                      <h2 className="featured__img--title">
                        Type: {pokemon.types}
                      </h2>
                      <h2 className="featured__img--title">
                        Sub-type: {pokemon.subtypes}
                      </h2>
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Featured;
