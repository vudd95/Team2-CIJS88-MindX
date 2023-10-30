import React from "react";

function Product({product}) {
  return (
    <div className="product-item">
      <img 
        style={{ width: "270px", height: "240px", borderRadius: "6px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
        src={product.image}
      />
      <p style={{ fontSize: "18px", fontWeight: "600"}}>{product.price}</p>
      <p style={{ fontSize: "16px", fontWeight: "400", color: "#606060" }}>
        Tittle
      </p>
      <button className="addtocart">
        <img src="shopping_cart.png" />
        Move to cart
      </button>
    </div>
  );
}

export default Product;
