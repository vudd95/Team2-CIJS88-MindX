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
        <div className='header__bottom'>
          <div className='header-categoryList__bottom'>
            <img src='/images/iconMenu.png'></img>
            <p className='category1'>All category</p>
            <p className='category2'>Hot offers</p>
            <p className='category3'>Gift boxes</p>
            <p className='category4'>Projects</p>
            <p className='category5'>Menu item</p>
            <p className='category6'>Help</p>
            <img src='/images/expand_more.png'></img>
          </div>
          <div className='header-moneyUnit__bottom'>
            <p>ENGLISH, USD</p>
            <img src='/images/expand_more.png'></img>
          </div>
          <div className='header-countryShip__bottom'>
            <p>Ship to</p>
            <img src='/images/iconFlags.png' className='iconFlags'></img>
            <img src='/images/expand_more.png'></img>
          </div>
        </div>
    </div>
  )
}

export default Header