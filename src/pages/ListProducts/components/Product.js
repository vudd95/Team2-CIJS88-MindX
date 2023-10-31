import { Button, ChakraProvider, Toast, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

function Product({product, addToCart}) {  
  const Toast = useToast()
  const { image, price, title, rating } = product;
  const handleAddToCart = (product) => {
    addToCart(product);
    Toast({
      title: "Thành công!",
      description: "Đơn hàng đã được thêm vào giỏ hàng.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log('success');
  };

  return (
    <div className="product">
      <Link to='/product-details'><img 
        style={{ width: "270px", height: "240px", borderRadius: "6px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}
        src={image}
      /></Link>
      <p style={{ fontSize: "18px", fontWeight: "600" }}>Price: {price}</p>
      <p style={{ fontSize: "13px", fontWeight: "400", color: "#606060", height:"45px" }}>
        {title}
      </p>
      <p>Count: {rating.count}</p>

      <Button className="addtocart" onClick={() => handleAddToCart(product)} >
        <img src="shopping_cart.png" />
        Move to cart
      </Button>

    </div>
  );
}

export default Product;
