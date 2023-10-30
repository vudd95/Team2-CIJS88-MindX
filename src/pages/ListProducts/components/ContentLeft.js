import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Product from "./Product";
const categorys =[
  "Electronics",
  "Jewelery",
  "Men's clothing",
  "Women's clothing"
]
function ContentLeft({
  categories,
  selectedCategories,
  products,
  toggleCategory,
  addToCart
}) 

{
  return (
    <div className="content">
      <div className="Content-left">
        <h1>Category:</h1>
        
        {categories.map((category) => (
          <Checkbox
            key={category}
            category={category}
            selectedCategories={selectedCategories}
            toggleCategory={toggleCategory}
          />
        ))}
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <Product product={product} key={product.id} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ContentLeft;
