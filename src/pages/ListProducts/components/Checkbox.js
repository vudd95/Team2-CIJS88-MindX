import React, { useState } from "react";

const Checkbox = ({ category, selectedCategories, toggleCategory }) => {

  const isChecked = selectedCategories.includes(category);
  return (
    <label style={{textTransform:'capitalize', marginTop:"30px"}}>
      <input
        type="checkbox"
        value={category}
        checked={isChecked}
        onChange={() => toggleCategory(category)}
        className="checkbox"
      />
      {category}
    </label>
  );
};

export default Checkbox;
