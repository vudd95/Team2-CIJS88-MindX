import React, { useState,useEffect } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Category.css'

function Category({addToCart, cart}) {

const [categories, setCategories] = useState([])
const [products, setProducts] = useState([])
const [category, setCategory] = useState('')

const [productsFilterByCategory, setProductsFilterByCategory] = useState([])
// const handleFilterByCategory = (category) =>{
//     setCategory(category)
//     setProductsFilterByCategory(products.filter((item) => item.category == category))
// }

console.log(productsFilterByCategory)

console.log(category)
const fetchCategories = () => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => {
        return response.json();
      })
      .then((category) => {
        setCategories(category);
      });
  };
  useEffect(() => {
    fetchCategories();  
  }, []);
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((product) => {
        setProducts(product);
      });
  };

  console.log(category)

  const handleClickCategory = () =>{

  }

  return (
    <>
    <Header cart={cart}></Header>
    <div className='category__all'>
        <div className='category__list'>
        {categories.length > 0 && (
              <ul>
                {categories.map((cate) => (
                  <li key={category.id} onClick={() => {setCategory(cate)}}>{cate}</li>
                ))}
              </ul>
            )}
        </div>
        <div>Category Products
            <div className='category__products'></div>
        </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Category