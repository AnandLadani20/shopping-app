import React from 'react';
import hero from '../../Assests/logo/Dhiyodha white.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'

const HeroPage = () => {
    return (
        <>
            <section className='hero-area'>
                <div className='container-fluid'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-12'>
                            <div className='hero-logo'>
                                <img src={hero} alt='logo' />
                            </div>
                        </div>
                        <div className='col-12 col-md-8 col-lg-6 mt-3'>
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
        </>
    )
}

export default HeroPage