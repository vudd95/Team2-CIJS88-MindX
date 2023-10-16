import React, { useState } from 'react'

function Quantitycontrol({ quantity, increaseQuantity, decreaseQuantity }) {
  // const [quantity, setQuantity] =useState(1)
  // const increaseQuantity = () => {
  //   setQuantity(quantity +1)
  // }
  // const decreaseQuantity = () => {
  //   if(quantity > 1){
  //       setQuantity(quantity -1)
  //   }
  // }

  return (
    <div className='quantity'>
      <button className='btn-quantity' onClick={increaseQuantity}>+</button>
      <span>{quantity}</span>
      <button  className='btn-quantity' onClick={decreaseQuantity}>-</button>
    </div>
  )
}

export default Quantitycontrol