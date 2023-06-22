import React from 'react';
import hero from '../../Assests/logo/Dhiyodha (1)n.png';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js'
import service from '../../Assests/icon/customer-service (1).png'
import cart from '../../Assests/icon/shopping-cart.png'
import kitchen from '../../Assests/icon/chef.png'
import travel from '../../Assests/icon/around.png'


const HeroPage = () => {
    return (
        <>
            <section className='hero-area'>
                 
                <div className='container-fluid'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-12'>
                            <div className='hero-logo'>
                                <img src={hero} alt='logo' height={200} />
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
                        <div className='col-12'>
                            <div className='shortcut-icons'>
                                <div className='product-design'>
                                    <div className='product1'>
                                    <img src={cart} alt='cart'/>
                                    </div>
                                    <p>E-Commerce</p>
                                </div>
                                <div className='product-design'>
                                    <div className='product1'>
                                        <img src={service} alt='service'/>
                                    </div>
                                    <p>Services</p>
                                </div>
                                <div className='product-design'>
                                    <div className='product1'>
                                        <img src={kitchen} alt='kitchen' />
                                    </div>
                                    <p>Mamma's Kitchen</p>
                                </div>
                                <div className='product-design'>
                                    <div className='product1'>
                                        <img src={travel} alt='travel' />
                                    </div>
                                    <p>Traveling</p>
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