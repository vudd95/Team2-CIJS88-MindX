import React from 'react'
import Listproduct from './Listproduct'
// import { FcLeft } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';
import Product from './Product';


function Cartcontent({ cart, setCart, totalPrice, coupon,setCoupon }) {
    const handleRemove = (productCode) => {
      setCart(cart => cart.filter(item => item.productCode !== productCode));
    };
  
    const price = cart.reduce((total, item) => total + item.amount * item.price, 0);
    console.log(cart);

  return (
    <div className='cart-content'>
        <h2>My cart ({cart.length})</h2>
       <div className='Cart-container'>
        <div className='shopping-cart'>
        {cart.map((item) => (
          <Listproduct key={item.id}  product={item} />
        ))}
        <div className="btn">
        <Link style={{textDecoration:"none"}} to="/"><button className='btn-back'>
          <img src='left.png' />
          <p>Back to home</p>
        </button></Link>
        <button className='btn-removeall' > Remove all</button>
      </div>
        </div>
        
      <Checkout 
      cart={cart}
      setCart={setCart}
      totalPrice={totalPrice}
      coupon={coupon}
      setCoupon={setCoupon}
      
      />
        </div>
        <div className='feature'>
          <img style={{width:"242px",height:"48px"}} src='item-feature1.png' />
          <img style={{width:"242px",height:"48px"}} src='item-feature2.png' />
          <img style={{width:"242px",height:"48px"}} src='item-feature3.png' />
        </div>
        
        <h2 style={{fontSize:"20px",fontWeight:"600",margin:"20px"}}>Saved for later</h2>
        <div className='product-related'>
        {/* {product.map((product) => (
          <Product  product={product} />
        ))} */}
        </div>
    </div>

  )
}

export default Cartcontent