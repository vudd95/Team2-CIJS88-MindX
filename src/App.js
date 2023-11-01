import React, { useState } from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home/Home";

import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Signup from "./pages/SignUp/Signup";
import Cart from "./pages/Cart/Cart";
import ListProducts from "./pages/ListProducts/ListProducts";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import NotFound from "./components/NotFound";
import { Payment } from "./pages/Payment/Payment";


export const rootData = [
  {
    email: "test@gmail.com",
    password: "12345678",
  },
  {
    email: "vu.dd95@gmail.com",
    password: "12345678"
  },
  {
    email: "admin@gmail.com",
    password: "1234"
  }
]

const App = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [coupon, setCoupon] = useState("");

  const addToCart = (product) => {
    let isNew = true;
    cart.forEach((it) => {
      if (it.id === product.id) {
        it.total += 1;
        isNew = false;
      }
    });
    if (isNew) {
      setCart([...cart, { ...product, total: 1 }]);
    } else {
      setCart([...cart]);
    }
    setTotalPrice(totalPrice + product.price);
    // updateTotalPrice();
  };



  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
  };

  const removeProduct = (productId) => {
    // lọc ra sp ko giống id với sp
    const updatedCart = cart.filter((product) => product.id !== productId);
    // tính lại tiền sau khi xóa
    const newTotalPrice = updatedCart.reduce(
      (total, product) => total + product.price * product.total,
      0
    );
    setCart(updatedCart);
    setTotalPrice(newTotalPrice);
  };

  return (
    <Routes>
      <Route path="/" element={<Home cart={cart}></Home>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route
        path="/cart"
        element={
          <Cart
            cart={cart}
            setCart={setCart}
            totalPrice={totalPrice}
            coupon={coupon}
            setCoupon={setCoupon}
            clearCart={clearCart}
            removeProduct={removeProduct}
            updateTotalPrice={updateTotalPrice}
           
          />
        }
      ></Route>
      <Route
        path="/list-product"
        element={<ListProducts addToCart={addToCart} cart={cart} />}
      ></Route>
      <Route path="/product-details" element={<ProductDetails cart={cart} />}></Route>
      <Route path="*" element={<NotFound></NotFound>} />
    </Routes>
  );
};

export default App;
