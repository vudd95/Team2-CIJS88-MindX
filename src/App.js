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
  const [coupon,setCoupon] = useState('')

  const addToCart = (product) => {
    // const discount = coupon === 'COUPONCODE' ? 10 : 0;
    setCart([...cart, product]);
    setTotalPrice(totalPrice + product.price)
    // const total = totalPrice - discount
    // setTotalPrice(total)
    // console.log(total);
    
  };
  console.log(cart);

  // const adminUser = {
  //   email: 'admin@admin.com',
  //   password: '12345678'
  // }

  // const [user, setUser] = useState({name: "", email: ""})
  // const [error, setError] = useState("")

  // const Login = details =>{
  //   console.log(details)
  // }



  return (
  
      <Routes>
        <Route path="/" element={<Home cart={cart}></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route
          path="/cart"
          element={
            <Cart cart={cart} setCart={setCart} totalPrice={totalPrice} coupon={coupon} setCoupon={setCoupon} />
          }
        ></Route>
        <Route
          path="/list-product"
          element={<ListProducts addToCart={addToCart} />}
        ></Route>
        <Route path="/product-details" element={<ProductDetails />}></Route>
      </Routes>
  );
};

export default App;
