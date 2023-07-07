import React from 'react'

import hero from '../../Assests/logo/Dhiyodha white.png';
import './index.css'
// import { ReactComponent as TestSvg } from '../../CSS/blob-haikei (2).svg'
import { ReactComponent as TestSvgSec } from '../../CSS/blob-scene-haikei.svg'
import { ReactComponent as TestSvgthird } from '../../CSS/blob-scene-haikei2.svg'
import { ReactComponent as SvgFarmerWomen } from '../../CSS/illustration-farmer-women5.svg'
import { ReactComponent as SvgFarmerWomenCow } from '../../CSS/illustration-farmer-women2.svg'
import { ReactComponent as SvgStudent } from '../../CSS/illustration-office-women2.svg'
import { ReactComponent as SvgWork } from '../../CSS/illustration-work.svg'
import { ReactComponent as SvgFarmerWomenPot } from '../../CSS/illustration-farmer-women3.svg'
import { ReactComponent as SvgFarmerWomenGrass } from '../../CSS/illustration-office-women.svg'
import { ReactComponent as SvgMountain } from '../../CSS/mountain.svg'

import { useNavigate } from 'react-router-dom';

const NewHomePage = () => {

    const navigate = useNavigate();
    const handleLogin = () => {
        // Perform login logic
        // Redirect to the home page
        navigate('/newhomepage');
    };
    return (
        <>
            <section className='new-hero-page-area'>
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

                                <button className='selling-btn'>Start Selling</button>

                            </div>
                        </div>
                    </div>
                </nav>
                <div className='container-fluid'>
                    <div className='header-around-svg'>
                        <div className='culture-svg'>
                             <div className='farm-women-svg'>
                                <SvgFarmerWomen/>
                             </div>
                             <div className='worker-men-svg'>
                                <SvgFarmerWomenCow/>
                             </div>
                            
                             <div className='farm-Men2-svg'>
                                <SvgFarmerWomenPot/>
                             </div>
                             <div className='student-svg'>
                                <SvgStudent/>
                             </div>
                             <div className='work-svg'>
                                <SvgWork/>
                             </div>
                             <div className='doctor-men-svg'>
                                <SvgFarmerWomenGrass/>
                             </div>
                             <div className='mountain-svg'>
                                <SvgMountain/>
                             </div>
                            
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='signup-btn'>
                                <button type="button" onClick={handleLogin}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section className='hero-area'>

                    <div className='container-fluid'>

                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-12'>
                                <div className='hero-logo'>
                                    <img src={hero} alt='logo' />
                                </div>
                            </div>
                            <div className='col-6 mt-3'>
                                <div className='hero-searchbar'>
                                    <div className="input-group ">
                                        <input type="search" className="form-control" placeholder="  Search Here" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                                    </div>
                                </div>
                            </div>
                     
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default NewHomePage