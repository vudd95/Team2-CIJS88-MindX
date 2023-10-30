import React from "react";
import { Link } from "react-router-dom";

function Product({product, addToCart}) {  
  const { image, price, title, rating } = product;
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <div className="product">
      <Link to='/product-details'><img 
        style={{ width: "270px", height: "240px", borderRadius: "6px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}
        src={image}
      /></Link>
      <p style={{ fontSize: "18px", fontWeight: "600" }}>Price: {price}</p>
      <p style={{ fontSize: "16px", fontWeight: "400", color: "#606060", height:"45px" }}>
        {title}
      </p>
      <p>Count: {rating.count}</p>
      <button className="addtocart" onClick={() => handleAddToCart(product)} >
        <img src="shopping_cart.png" />
        Move to cart
      </button>
    </div>
  );
}

export default Product;
