import React, { useState } from "react";
import "./cart.css";
import Cartheader from "./Cartcomponent/Cartheader";
import Cartcontent from "./Cartcomponent/Cartcontent";
import Footer from '../../components/Footer/Footer'
// import { useCart } from '../../contexts/CartContext'

const Cart = ({
  cart,
  setCart,
  totalPrice,
  coupon,
  setCoupon,
  clearCart,
  removeProduct,
  updateTotalPrice
}) => {
  // const { cart } = useCart();
  return (
    <div>
      <Cartheader cart={cart} />
      <Cartcontent
        cart={cart}
        setCart={setCart}
        totalPrice={totalPrice}
        coupon={coupon}
        setCoupon={setCoupon}
        clearCart={clearCart}
        removeProduct={removeProduct}
        updateTotalPrice={updateTotalPrice}
      />
      <Footer></Footer>
    </div>
  );
};

export default Cart;
