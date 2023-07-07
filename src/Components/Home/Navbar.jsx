import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as TestSvgSec } from '../../CSS/blob-scene-haikei.svg'
import { ReactComponent as TestSvgthird } from '../../CSS/blob-scene-haikei2.svg'


const Navbar = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic
        // Redirect to the home page
        navigate('/sellingpage');
    };
    const handleSignup = () => {
        navigate('/newhomepage');
    }
    return (
        <>
            <div className='hero-svg-leftcorner'>
                <TestSvgSec />
            </div>
            <div className='hero-svg-rightcorner'>
                <TestSvgthird />
            </div>
            <nav className='home-nav'>
                <div className='container-fluid'>
                    <div className='d-flex align-item-center justify-content-end'>
                        <div className='menu-title'>

                            <button className='selling-btn' onClick={handleLogin}>Start Selling</button>

                        </div>
                    </div>
                </div>
            </nav>

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='signup-btn'>
                            <button type="button" onClick={handleSignup}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar