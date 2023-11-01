import React, { useState } from "react";
import Quantitycontrol from "./Quantitycontrol";
function Listproduct({
  product,
  removeProduct,
  updateTotalPrice,
  lstPrdoduct,
  setCart,
}) {
  const [quantity, setQuantity] = useState(product.total);
  const increaseQuantity = () => {
    lstPrdoduct?.forEach((it) => {
      if (it.id === product.id) {
        it.total = quantity + 1;
      }
    });
    setQuantity(quantity + 1);
    setCart([...lstPrdoduct]);
  };
  const decreaseQuantity = () => {
    if (quantity > 1) {
      lstPrdoduct?.forEach((it) => {
        if (it.id === product.id) {
          it.total = quantity - 1;
        }
      });
      setQuantity(quantity - 1);
      setCart([...lstPrdoduct]);
    }
  };

  return (
    <div className="cartlist">
      <div className="infocart">
        <div>
          <img style={{ width: "70px", height: "70px" }} src={product.image} />
        </div>
        <div className="cart-detail">
          <p>{product.title}</p>
          <p></p>
          <p></p>
          <div className="btn-cart">
            <button
              className="btn-remove"
              onClick={() => removeProduct(product.id)}
            >
              Remove
            </button>
            <button className="btn-save">Save for later</button>
          </div>
        </div>
      </div>
      <div className="numproduct">
        <p>${product.price}</p>
        <Quantitycontrol
          quantity={quantity}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      </div>
    </div>
  );
}

export default Listproduct;
