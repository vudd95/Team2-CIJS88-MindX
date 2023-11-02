import { Button, ChakraProvider, Toast, useToast } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Product({product, addToCart}) {  
  const Toast = useToast()
  const { image, price, title, rating } = product;
  const handleAddToCart = (product) => {
    addToCart(product);
    Toast({
      title: "Success!",
      description: " Product added to cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    console.log('success');
  };
  const navigate = useNavigate();

  const viewProduct = (productId) => {
    // Sử dụng navigate để điều hướng đến trang sản phẩm cụ thể
    navigate(`/products/${productId}`);
  };

  return (
    <div className="product">
      <div onClick={() => viewProduct(product.id)} style={{display:"flex", justifyContent:"center", alignItems:"center", marginBottom:"10px", cursor:"pointer"}} ><img 
        style={{ width: "200px", height: "200px", borderRadius: "6px",boxShadow:"rgba(149, 157, 165, 0.2) 0px 8px 24px;" }}
        src={image}
      /></div>
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
