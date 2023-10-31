import React from 'react'

function Quantitycontrol({ quantity, increaseQuantity, decreaseQuantity }) {
  return (
    <div className='quantity'>
      <button className='btn-quantity' onClick={increaseQuantity}>+</button>
      <span>{quantity}</span>
      <button  className='btn-quantity' onClick={decreaseQuantity}>-</button>
    </div>
  )
}

export default Quantitycontrol