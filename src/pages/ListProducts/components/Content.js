import React from "react";
import ContentLeft from "./ContentLeft";

export default function Content({
  categories,
  selectedCategories,
  products,
  toggleCategory,
  setCategories
}) {
  return (
    <div>
      <ContentLeft
        categories={categories}
        selectedCategories={selectedCategories}
        products={products}
        toggleCategory={toggleCategory}
      />
    </div>
  );
}
