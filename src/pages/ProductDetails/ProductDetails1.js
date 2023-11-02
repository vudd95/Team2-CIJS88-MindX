import React, { useState, useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import './ProductDetails1.css'
import Subscribe from '../../components/Subscribe/Subscribe'

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
            <div className='product__details-left'>
                <img src={products.image}></img>
            </div>
            <div className='product__details-right'>
                <h2>{products.title}</h2>
                <p className='product__details-category'>Category: {products.category}</p>
                <div className='product__details-price'>
                <p >Price: ${products.price}</p>
                </div>
                
                <p className='product__details-desc'>Description: {products.description}</p>
                {/* <p>Count: {products.rating.count}</p> */}
            </div>
        </div>
        {/* <Subscribe></Subscribe> */}
        <Footer></Footer>
    </>
  )
}

export default ProductDetails1