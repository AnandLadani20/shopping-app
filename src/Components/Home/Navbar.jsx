import React from 'react'
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
                    <div className='d-flex align-item-center justify-content-end'>
                        <div className='menu-title'>

                            <button onClick={handleLogin} className='selling-btn'>Start Selling</button>
                            
                        </div>
                    </div>
                </div>
            </nav>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                    <div className='signup-btn'>
                            <button type="button">Sign Up</button>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar