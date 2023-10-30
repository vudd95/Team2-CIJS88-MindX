import React from "react";
import ContentLeft from "./ContentLeft";

export default function Content({
  categories,
  selectedCategories,
  products,
  toggleCategory,
  addToCart
}) {
  return (
    <div>
      <ContentLeft

        categories={categories}
        selectedCategories={selectedCategories}
        products={products}
        toggleCategory={toggleCategory}
        addToCart={addToCart}
      />
    </div>
  );
}
