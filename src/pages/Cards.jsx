import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Cards() {
  const { id } = useParams();
  console.log(id)
  const [pokemon, setPokemon] = useState([]);

  async function fetchId() {
    const { data } = await axios.get(
      `https://api.pokemontcg.io/v2/cards?q=id:${id}`
    );
    setPokemon(data.data);
  }

  useEffect(() => {
    fetchId();
  }, [id]);
  return (
    <div id="cards__body">
      <main className="cards__main">
        <div className="cards__container">
          <div className="row">
            <div className="back__arrow">
              <Link to="/card" className="back__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/card" className="back__link">
                <h2 className="back__link--title">Back</h2>
              </Link>
            </div>
            {pokemon.map((pokemon) => (
              <div className="cards__selected--wrapper" key={pokemon.id}>
                <div className="cards__selected" >
                  <figure className="cards__img--wrapper">
                    <img
                      src={pokemon.images.small}
                      alt=""
                      className="cards__img"
                    />
                  </figure>
                  <div className="cards__selected--description">
                    <h2 className="cards__selected--title">{pokemon.name}</h2>
                    <p className="cards__selected--para">
                    {pokemon.name} is a {pokemon.types} type Pokémon with {pokemon.hp} health. 
                    This specific type is from the  {pokemon.set.name} set, and its release date is  {pokemon.set.releaseDate}
                    </p>
                    <br />
                    <p className="cards__selected--para">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quos, inventore dolores. Eveniet vitae doloribus
                      perspiciatis molestiae! Consectetur expedita dolorem illum
                      enim, neque voluptate impedit modi, libero quos, ipsa sit
                      esse?
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Cards;
