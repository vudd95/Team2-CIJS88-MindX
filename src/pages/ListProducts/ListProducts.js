import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Tittle from "./components/Tittle";
import "./App.css";
import Content from "./components/Content";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import Footer from '../../components/Footer/Footer'

const ListProducts = ({addToCart}) => {
  //lưu trữ danh mục sp từ api
  const [categories, setCategories] = useState([]);
  //Lưu trữ danh mục dc chọn từ user
  const [selectedCategories, setSelectedCategories] = useState([]);
  // lưu trữ sp sau khi đã lọc
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
      //hàm gọi api danh mục sản phẩm
      const fetchCategoryData = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products/categories");
          setCategories(response.data);
        } catch (error) {
          console.error(error);
          setLoading(false);
          
        }
      };
      // hàm gọi api để lấy sản phẩm theo danh mục
      const fetchProductsByCategory = async (category) => {
        try {
          const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
          return response.data;
        } catch (error)
         {
          console.error(error);
          return [];
          
        }
      };

      fetchCategoryData();

      if (selectedCategories.length > 0) {
        const filteredProducts = [];
        for (const category of selectedCategories) {
          const productsByCategory = await fetchProductsByCategory(category);
          filteredProducts.push(...productsByCategory);
        }
        setProducts(filteredProducts);
        setLoading(false);
      } else {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          setProducts(response.data);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      }
    };

    fetchData();
    
  }, [selectedCategories]);

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
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
        addToCart={addToCart}
      />
    <div className="loading">
    {loading && (
        <>
         <ClipLoader
            color={'blue'}
            loading={loading}
            // cssOverride={'override'}
            size={200}
            aria-label="Loading Spinner"
            data-testid="loader" />
        </>
      )}
    </div>
      <Footer />
    </div>
  );
};

export default ListProducts;
