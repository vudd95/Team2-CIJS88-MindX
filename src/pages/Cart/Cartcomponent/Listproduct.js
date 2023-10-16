import React, { useState } from "react";
import Quantitycontrol from "./Quantitycontrol";
function Listproduct({ product }) {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="cartlist">
      <div className="infocart">
        <div>
          <img style={{ width: "70px", height: "70px" }} src={product.image} />
        </div>
        <div className="cart-detail">
          <p>{product.name}</p>
          <p>Size</p>
          <p>Seller</p>
          <div className="btn-cart">
            <button className="btn-remove">Remove</button>
            <button className="btn-save">Save for later</button>
          </div>
        </div>
      </div>
      <div className="numproduct">
        <p>{product.price}</p>
        <Quantitycontrol
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>

      {/* <div className="btn-back">
        <button> Back to shop</button>
      </div> */}
    </div>
    
  );
}

export default Listproduct;
