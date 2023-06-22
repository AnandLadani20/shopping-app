import React from 'react'
import Verification from './Verification';
import logo from '../../Assests/logo/Dhiyodha (1)n.png'
import './index.css'
import { Link } from 'react-router-dom';

const SellingSignup = () => {
  return (
   <>
       <nav className='home-nav'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='main-logo d-inline'>
                            <Link to="#"><img src={logo} alt='logo' height={60} /></Link>
                        </div>                     
                    </div>
                </div>
            </nav>
    
   <Verification/>
   </>
  )
}

export default SellingSignup