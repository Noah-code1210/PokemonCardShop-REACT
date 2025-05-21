import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Cards({}) {

  return (
    <div id="cards">
      <div className="cards__container">
        <div className="cards__row">
          <div className="cards__navigation">
            <Link to="/">
              <FontAwesomeIcon
                icon="arrow-left"
                className="cards__arrow--icon"
              />
            </Link>
            <h2 className="cards__title">Back</h2>
          </div>
          <div className="cards__selected">
            <figure className="cards__selected--figure">
              <img src="" alt="" className="cards__selected--img" />
            </figure>
            <div className="cards__selected--title">
              EX 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
