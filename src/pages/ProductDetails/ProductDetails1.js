import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import './ProductDetails1.css'

function ProductDetails1() {

    const params = useParams()
    //lay data tu API

    const [products, setProducts] = useState([])
    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => {
            return response.json();
          })
          .then((product) => {
            setProducts(product[params.productId-1])
          });
      };
        useEffect(() => {
        fetchProducts();
      });
    return (
    <>
        <Header></Header>
        
        <div className='product__details'>
            <p>{products.price}</p>
            <img src={products.image}></img>
        </div>
        <Footer></Footer>
    </>
  )
}

export default ProductDetails1