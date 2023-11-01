import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import Header from '../../components/Header/Header';
import Content1 from './components/Content1';
import Header2 from './components/Header2';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';
import Footer from './components/Footer';
// import Header from '../components/';
const ProductDetails = ({cart}) => {
  // const [product, setProduct] = useState(null);

  // useEffect(() => {
  //   const productId = match.params.id; // Lấy ID sản phẩm từ URL
  //   // Gọi API để lấy thông tin sản phẩm theo ID
  //   fetch(`https://fakestoreapi.com/products/${productId}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProduct(data); // Lưu thông tin sản phẩm vào state
  //     })
  //     .catch((error) => {
  //       console.error("Lỗi khi gọi API: ", error);
  //     });
  // }, [match.params.id]);
  return (
    <div>
      <Header cart={cart} />
      <Header2 />
      <div className="main">
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
      </div>
      <Footer />
    </div>
  )
};

export default ProductDetails;
