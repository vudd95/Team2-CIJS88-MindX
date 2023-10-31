import React, { useState } from "react";
import Checkbo from "./Checkbox";
import Product from "./Product";
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
        <h1 style={{fontSize:"30px",fontWeight:"600"}}>Category:</h1>
        
        {categories.map((category) => (
          <Checkbo
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
