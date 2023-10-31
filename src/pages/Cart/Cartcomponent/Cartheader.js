import React from 'react'
import { Link } from "react-router-dom";

function Cartheader({cart}) {
  return (
    <div className='Cart-header'>
   <div><Link to="/"><img src='logo-colored.png' /></Link></div>
   <div className='cart-icon'>
   <Link> <div className='header-iconProfile__top'>
                <img src='/images/iconProfile.png'></img>
                <p>Profile</p>
              </div></Link>
              <Link> <div className='header-iconMessage__top'>
                <img src='/images/iconMessage.png'></img>
                <p>Message</p>
              </div></Link>
              <Link><div className='header-iconOrders__top'>
                <img src='/images/iconOrder.png'></img>
                <p>Order</p>
              </div></Link>
              <Link to='/cart'><div className='header-iconCart__top'>
                <img src='/images/iconCart.png'></img>
                <p className='mycart'>My cart</p>
              </div></Link>
              {cart.length === 0 ? (<p></p>) : (<p>{cart.length}</p>)}
   </div>
  </div>
  )
}

export default Cartheader