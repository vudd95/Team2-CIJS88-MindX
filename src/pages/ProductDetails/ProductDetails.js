import React from 'react';
import './ProductDetails.css';
import Header from '../../components/Header/Header';
import Content1 from './components/Content1';
import Header2 from './components/Header2';
import Content2 from './components/Content2';
import Content3 from './components/Content3';
import Content4 from './components/Content4';
import Footer from './components/Footer';
// import Header from '../components/';
const ProductDetails = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <div className="main">
        <Content1 />
        <Content2 />
        <Content3 />
        <Content4 />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
