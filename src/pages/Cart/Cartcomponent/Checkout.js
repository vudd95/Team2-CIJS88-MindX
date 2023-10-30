import React from 'react'

function Checkout({totalPrice, coupon, setCoupon}) {
  return (
    <div>
        <div className='coupon'>
            <p>Have a coupon?</p>
            <div className='input-coupon'>
                <input 
                placeholder='Add coupon'
                type='text'
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                
                />
                <button>Apply</button>
            </div>
        </div>
        <div className='checkout'>
           <div className='sub'>
            <p>Subtotal:</p>
            <p>${totalPrice}</p>
           </div>
           <div className='sub'>
            <p>Discount:</p>
            {/* <p>- ${coupon}</p> */}
           </div>
           <div className='sub'>
            <p>Tax:</p>
            <p>$</p>
           </div>
           <div className='total'>
            <p>Total:</p>
            <p>${totalPrice} </p>
           </div>
           <button className='btn-checkout'>Check out</button>
           <div className='img-payment'>
            <img src='payment1.png' />
            <img src='payment2.png' />
            <img src='payment3.png' />
            <img src='payment4.png' />
            <img src='payment5.png' />
           </div>


        </div>
    </div>
  )
}

export default Checkout