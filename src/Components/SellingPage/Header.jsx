import React from 'react'
import logo from '../../Assests/logo/Dhiyodha (1)n.png';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
            <nav className='selling-nav'>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='main-logo'>
                            <Link to="#"><img src={logo} alt='logo' height={60} /></Link>
                        </div>
                        <div className='selling-menu-title'>
                           <ul>
                            <li><Link to='#' className='border-active'>Home</Link></li>
                            <li><Link to='#' className='border-show'>Feature</Link></li>
                            <li><Link to='#' className='border-show'>Product</Link></li>
                            <li><Link to='#' className='border-show'>Contact</Link></li>
                           </ul>
                           <Link to='#' className='buy-btn' role='button'>Buy Now</Link>
                        </div>
                    </div>
                </div>
            </nav>
    </>
  )
}

export default Header