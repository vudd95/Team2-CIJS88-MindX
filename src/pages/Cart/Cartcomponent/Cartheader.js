import React from 'react'
import { Link } from "react-router-dom";

function Cartheader({cart}) {
  return (
    <div className='Cart-header'>
   <div><Link to="/"><img src='logo-colored.png' /></Link></div>
   <div className='cart-icon'>
   <div className='header-iconProfile__top'>
                <img src='/images/iconProfile.png'></img>
                <p>Profile</p>
              </div>
              <div className='header-iconMessage__top'>
                <img src='/images/iconMessage.png'></img>
                <p>Message</p>
              </div>
              <div className='header-iconOrders__top'>
                <img src='/images/iconOrder.png'></img>
                <p>Order</p>
              </div>
              <Link to='/cart'><div className='header-iconCart__top'>
                <img src='/images/iconCart.png'></img>
                <p className='mycart'>My cart</p>
                {/* <p>{cart.length}</p> */}
              </div></Link>
   <p>{cart.length}</p>
   </div>
  </div>
  )
}

export default Cartheader