import React from "react";

function Cart() {
  return (
    <section id="cart">
      <div className="btn__wrapper">
        <button
          className="cart__btn"
          onClick={() =>alert("Still need a little more practice before adding this feature :)")}
        >
          Click Here
        </button>
      </div>
    </section>
  );
}

export default Cart;
