import React from "react";
import Listproduct from "./Listproduct";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { Button } from "@chakra-ui/react";

function Cartcontent({
  cart,
  setCart,
  totalPrice,
  coupon,
  setCoupon,
  clearCart,
  removeProduct,
  updateTotalPrice
}) {
  return (
    <div className="cart-content">
      <h2>My cart ({cart.length})</h2>
      <div className="Cart-container">
        {cart.length === 0 ? (
          <div className="cart-empty">
            <img
              src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
              style={{ width: "500px", height: "300px" }}
            />
            <div>
              <p>Your Brand Cart is empty </p>
              <Link to="/list-product">
                <Button colorScheme="teal" size="lg">
                  Back to Shop
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="shopping-cart">
            {cart.map((item) => (
              <Listproduct
                removeProduct={removeProduct}
                key={item.id}
                product={item}
              />
            ))}
            <div className="btn">
              <Link style={{ textDecoration: "none" }} to="/">
                <button className="btn-back">
                  <img src="left.png" />
                  <p>Back to home</p>
                </button>
              </Link>
              <button className="btn-removeall" onClick={clearCart}>
                {" "}
                Remove all
              </button>
            </div>
          </div>
        )}

        <Checkout
          cart={cart}
          setCart={setCart}
          totalPrice={totalPrice}
          coupon={coupon}
          setCoupon={setCoupon}
          updateTotalPrice={updateTotalPrice}
        />
      </div>
      <div className="feature">
        <img
          style={{ width: "242px", height: "48px" }}
          src="item-feature1.png"
        />
        <img
          style={{ width: "242px", height: "48px" }}
          src="item-feature2.png"
        />
        <img
          style={{ width: "242px", height: "48px" }}
          src="item-feature3.png"
        />
      </div>

      <h2 style={{ fontSize: "20px", fontWeight: "600", margin: "20px" }}>
        Saved for later
      </h2>
      <div className="product-related">
        {/* {product.map((product) => (
          <Product  product={product} />
        ))} */}
      </div>
    </div>
  );
}

export default Cartcontent;
