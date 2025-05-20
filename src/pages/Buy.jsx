import React from 'react'
import Providers from '../components/ui/Providers'

function Buy() {
  return (
    <section id="buy">
      <div className="buy__container">
        <div className="buy__row">
          <div className="buy__description">
            <h2 className="buy__title">
              WHERE TO BUY?
            </h2>
            <p className="buy__para">
              You can find Pokémon TCG products at the retailers listed below, or your local game
              <br />
              stores that sell Pokémon TCG products.
            </p>
          </div>
          <Providers />
        </div>
      </div>
    </section>
  )
}

export default Buy
