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
            
            <div className='header-icon__top'>Icon</div>

        </div>
        <div className='header__bottom'>Header bottom</div>
    </div>
  )
}

export default Header