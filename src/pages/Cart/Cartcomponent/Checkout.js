import React from "react";
import { useNavigate } from "react-router-dom";

function Checkout({ totalPrice, cart, handleCheckout }) {
  return (
    <div>
      {cart.length === 0 ? (<p></p>) : ( 
      <div className="checkout">
        <div className="sub">
          <p>Subtotal:</p>
          <p>
            $
            {cart
              ?.reduce(
                (currentValue, it) => it.price * it.total + currentValue,
                0
              )
              .toFixed(2) || 0}
          </p>
        </div>
        <button className="btn-checkout" 
        onClick={handleCheckout}
        >Check out</button>
        <div className="img-payment">
          <img src="payment1.png" />
          <img src="payment2.png" />
          <img src="payment3.png" />
          <img src="payment4.png" />
          <img src="payment5.png" />
        </div>
      </div>)}
    </div>
  );
}

export default Checkout;
