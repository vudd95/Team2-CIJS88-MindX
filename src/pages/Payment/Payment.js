import React, { useState } from "react";
import "./App.css";

export const Payment = () => {
    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        address: "",
        paymentMethod: "cashOnDelivery", // Mặc định là thanh toán khi nhận hàng
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleFormSubmit = (event) => {
        event.preventDefault();
        // Xử lý dữ liệu đơn hàng ở đây, ví dụ: gửi đơn hàng lên máy chủ
      };
    
      return (
        <div className="payment" >
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Tên:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
    
          <div>
            <label htmlFor="phoneNumber">Số điện thoại:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
    
          <div>
            <label htmlFor="address">Địa chỉ:</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>
    
          <div>
            <label htmlFor="paymentMethod">Hình thức thanh toán:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="cashOnDelivery">Thanh toán khi nhận hàng</option>
              <option value="creditCard">Thanh toán qua thẻ tín dụng</option>
              <option value="paypal">Thanh toán qua PayPal</option>
            </select>
          </div>
    
          <button type="submit">Xác nhận đơn hàng</button>
        </form>
        </div>
      );
};
