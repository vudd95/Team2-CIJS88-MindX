import React from 'react'
import '../Subscribe/subscribe.css'

const Subscribe = () => {
  return (
    <div className='subscribe'>
        <h2>Subscribe on our newsletter</h2>
        <p>Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className='subscribe__action'>
            <input placeholder='Email'></input>
            <button>Subscribe</button>
        </div>

    </div>
  )
}

export default Subscribe