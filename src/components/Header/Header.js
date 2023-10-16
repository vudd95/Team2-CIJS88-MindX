import React from 'react'
import '../Header/header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='header__top'>
            <div className='header-logo__top'></div>
            <div className='header-search__top'>
                <input className='header-searchInput__top' placeholder='Search'></input>
                <div className='header-allCategory__top'>
                    <p>All category</p>
                    <img src='/images/expand_more.png'></img>
                </div>
                <button className='header-searchButton__top'>Search</button>
            </div>
            
            <div className='header-icon__top'>
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
              <div className='header-iconCart__top'>
                <img src='/images/iconCart.png'></img>
                <p>My cart</p>
              </div>
            </div>

        </div>
        <div className='header__bottom'>Header bottom</div>
    </div>
  )
}

export default Header