import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import "./ProductDetails1.css";
import Subscribe from "../../components/Subscribe/Subscribe";
import { Button, Toast, useToast } from "@chakra-ui/react";
import {BsMinecart} from 'react-icons/bs'

function ProductDetails1({addToCart, cart}) {
  const Toast = useToast()
  const handleAddToCart = () => {
    addToCart(product);
    Toast({
      title: "Success!",
      description: " Product added to cart.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  const params = useParams();
  //lay data tu API

  const [product, setProduct] = useState([]);
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        setProduct(product[params.productId - 1]);
      });
  };
  useEffect(() => {
    fetchProducts();
  });
  return (
    <>
      <Header cart={cart}></Header>

      <div className="product__details">
        <div className="product__details-left">
          <img src={product.image}></img>
        </div>
        <div className="product__details-right">
          <h2>{product.title}</h2>
          <p className="product__details-category">
            Category: {product.category}
          </p>
          <div className="product__details-price">
            <p>Price: ${product.price}</p>
          </div>

          <p className="product__details-desc">
            Description: {product.description}
          </p>
          <Button className="btn-move" colorScheme='whatsapp' onClick={() => handleAddToCart(product)}>
            
          <BsMinecart />
            Move to cart
          </Button>
        </div>
      </div>
      {/* <Subscribe></Subscribe> */}
      <Footer></Footer>
    </>
  );
}

export default ProductDetails1;
