import React, { useState } from "react";
import Listproduct from "./Listproduct";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import { Button, Input, Select } from "@chakra-ui/react";
import Swal from "sweetalert2";

function Cartcontent({
  cart,
  setCart,
  totalPrice,
  coupon,
  setCoupon,
  clearCart,
  removeProduct,
  updateTotalPrice,
}) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    address: "",
    paymentMethod: "option1",
    accountNumber: "", // Thêm ô input cho số tài khoản
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCheckout = () => {
    // Xử lý hoàn thành đơn hàng ở đây (ví dụ: gửi đơn hàng lên máy chủ).
  
    setFormData({
      name: "",
      phoneNumber: "",
      address: "",
      paymentMethod: "option1",
      accountNumber: "", // Đặt số tài khoản thành trống
    });
    setCart([]);

    // Hiển thị thông báo hoàn thành
    Swal.fire({
      icon: "success",
      title: "Đơn hàng đã được hoàn thành!",
    });
  };
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
              <Link to="/products">
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
                lstPrdoduct={cart}
                setCart={setCart}
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
          handleCheckout={handleCheckout}
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
    {cart.length === 0 ? (<></>) : 
    (<div>
      <h2 style={{ fontSize: "20px", fontWeight: "600", margin: "20px" }}>
        Shipment Details
      </h2>
      <div className="product-related">
        <div>
          <label htmlFor="name">Full name:</label>
          <Input
            name="name"
            value={formData.name}
            required
            onChange={handleInputChange}
          ></Input>
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone number:</label>
          <Input value={formData.phoneNumber} 
          onChange={handleInputChange} 
          name="phoneNumber"
          required 
          ></Input>
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <Input value={formData.address} required onChange={handleInputChange} name="address"></Input>
        </div>
        <div>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <Select
            placeholder="Select option"
            size="lg"
            value={formData.paymentMethod}
            onChange={handleInputChange}
            name="paymentMethod"

          >
            <option value="option1">Payment on delivery</option>
            <option value="option2">Credit cart</option>
            <option value="option3">Paypal</option>
          </Select>
        </div>
        <div>
          <label htmlFor="accountNumber">Account Number:</label>
          <Input name="accountNumber" value={formData.accountNumber}onChange={handleInputChange} name="accountNumber" />
        </div>
      </div>
      </div>)}
    </div>
  );
}

export default Cartcontent;
