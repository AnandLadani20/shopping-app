import React from 'react'
import logo from '../../Assests/logo/Dhiyodha (1)n.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'


const Navbar = () => {
    return (
        <>
            <nav className='home-nav'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='main-logo d-inline'>
                            <a href="#"><img src={logo} alt='logo-image' height={60} /></a>
                        </div>
                        <div className='menu-title'>
                            <a href='/sellItems' className='selling-btn'  role="button">Start Selling</a>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar