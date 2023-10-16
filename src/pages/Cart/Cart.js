import React from 'react'
import "./cart.css"
import Cartheader from './Cartcomponent/Cartheader'
import Cartcontent from './Cartcomponent/Cartcontent'


const Cart = () => {
  return (
    <div>  
      <Cartheader />
      <Cartcontent />
    </div>
  )
}

export default Cart