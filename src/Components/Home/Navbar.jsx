import React from 'react'
import logo from '../../Assests/logo/Dhiyodha (1)n.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
      // Perform login logic
      // Redirect to the home page
      navigate('/sellingpage');
    };
    return (
        <>
            <nav className='home-nav'>
                <div className='container-fluid'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='main-logo d-inline'>
                            <a href="#"><img src={logo} alt='logo-image' height={60} /></a>
                        </div>
                        <div className='menu-title'>
                            
                            <button onClick={handleLogin} className='selling-btn'>Start Selling</button>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar