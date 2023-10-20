import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Tittle from "./components/Tittle";
import "./App.css";
import Content from "./components/Content";
import axios from "axios";
const ListProducts = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (selectedCategories.length > 0) {
      // Gọi API để lấy danh sách sản phẩm theo danh mục đã chọn
      // const selectedCategoriesParam = selectedCategories.join(',');
      axios.get(`https://fakestoreapi.com/products/category/${selectedCategories}`)
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      // Gọi API để lấy tất cả sản phẩm khi selectedCategories rỗng
      axios.get('https://fakestoreapi.com/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
    // gọi api để lấy dữ liệu danh sách danh mục
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then(res => {
        setCategories(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }
  , [selectedCategories]);
  console.log(selectedCategories)
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(item => item !== category));
    } 
    else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  return (
    <div>
      <Header />
      <Tittle />
      <Content
        categories={categories}
        selectedCategories={selectedCategories}
        products={products}
        toggleCategory={toggleCategory}
      />
    </div>
  );
};

export default ListProducts;
