import React from 'react'
import logo from '../../Assests/logo/Dhiyodha (1)n.png'

const Header = () => {
  return (
    <>
            <nav className='selling-nav'>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='main-logo'>
                            <a href="#"><img src={logo} alt='logo-image' height={60} /></a>
                        </div>
                        <div className='selling-menu-title'>
                           <ul>
                            <li><a href='#' className='border-active'>Home</a></li>
                            <li><a href='#' className='border-show'>Feature</a></li>
                            <li><a href='#' className='border-show'>Product</a></li>
                            <li><a href='#' className='border-show'>Contact</a></li>
                           </ul>
                           <a href='#' className='buy-btn' role='button'>Buy Now</a>
                        </div>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Header