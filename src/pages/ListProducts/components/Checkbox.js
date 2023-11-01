import React, { useState } from "react";
import { Checkbox } from '@chakra-ui/react'

const Checkbo = ({ category, selectedCategories, toggleCategory }) => {

  const isChecked = selectedCategories.includes(category);
  return (

    <Checkbox 
        checked={isChecked}
        onChange={() => toggleCategory(category)}
        className="checkbox"
        style={{textTransform:'capitalize', marginTop:"30px"}}
        size="lg"
    >
      <p style={{fontSize:"20px"}}>{category}</p>


    </Checkbox>
  );
};

export default Checkbo;
