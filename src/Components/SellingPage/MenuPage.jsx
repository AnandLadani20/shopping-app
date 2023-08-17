import React from 'react'
import { Link } from 'react-router-dom'
import shoppingBag from '../../Assests/hero-gif/online-shopping (1).png'

const MenuPage = () => {
    return (
        <>

            <div className='col-12 col-lg-2'>
                <div className='selling-header-menu-area'>
                    <ul>
                        <li className='home-list-item-area select-list-item'><i className="fa-light fa-greater-than"></i><Link to='#'>Home</Link>
                            <div className='menu-hover-home-page'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='row border-bottom-random pb-4'>
                                            <div className='col-4'>
                                                <div className='home-content-img'>
                                                    <img src={shoppingBag} alt='home-content' />
                                                </div>
                                            </div>
                                            <div className='col-8'>
                                                <div className='home-content-detail'>
                                                    <h1>Home</h1>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo culpa beatae blanditiis minima. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='home-content-links'>
                                            <ul>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* <li className='about-list-item-area select-list-item'><i className="fa-light fa-greater-than"></i><Link to='#'>About</Link>
                        <div className='menu-hover-about-page'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='row border-bottom-random pb-4'>
                                            <div className='col-4'>
                                                <div className='home-content-img'>
                                                    <img src={shoppingBag} alt='home-content' />
                                                </div>
                                            </div>
                                            <div className='col-8'>
                                                <div className='home-content-detail'>
                                                    <h1>About</h1>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo culpa beatae blanditiis minima. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='home-content-links'>
                                            <ul>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                        <li className='service-list-item-area select-list-item'><i className="fa-light fa-greater-than"></i><Link to='#'>Services</Link>
                        <div className='menu-hover-service-page'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='row border-bottom-random pb-4'>
                                            <div className='col-4'>
                                                <div className='home-content-img'>
                                                    <img src={shoppingBag} alt='home-content' />
                                                </div>
                                            </div>
                                            <div className='col-8'>
                                                <div className='home-content-detail'>
                                                    <h1>Services</h1>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo culpa beatae blanditiis minima. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='home-content-links'>
                                            <ul>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='product-list-item-area select-list-item'><i className="fa-light fa-greater-than"></i><Link to='#'>Finance</Link>
                        <div className='menu-hover-product-page'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='row border-bottom-random pb-4'>
                                            <div className='col-4'>
                                                <div className='home-content-img'>
                                                    <img src={shoppingBag} alt='home-content' />
                                                </div>
                                            </div>
                                            <div className='col-8'>
                                                <div className='home-content-detail'>
                                                    <h1>Finance</h1>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo culpa beatae blanditiis minima. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='home-content-links'>
                                            <ul>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='customer-list-item-area select-list-item'><i className="fa-light fa-greater-than"></i><Link to='#'>Support</Link>
                        <div className='menu-hover-customer-page'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='row border-bottom-random pb-4'>
                                            <div className='col-4'>
                                                <div className='home-content-img'>
                                                    <img src={shoppingBag} alt='home-content' />
                                                </div>
                                            </div>
                                            <div className='col-8'>
                                                <div className='home-content-detail'>
                                                    <h1>Support</h1>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo culpa beatae blanditiis minima. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='home-content-links'>
                                            <ul>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='contact-list-item-area select-list-item'><i className="fa-light fa-greater-than"></i><Link to='#'>Contact</Link>
                        <div className='menu-hover-contact-page'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='row border-bottom-random pb-4'>
                                            <div className='col-4'>
                                                <div className='home-content-img'>
                                                    <img src={shoppingBag} alt='home-content' />
                                                </div>
                                            </div>
                                            <div className='col-8'>
                                                <div className='home-content-detail'>
                                                    <h1>Contact</h1>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo culpa beatae blanditiis minima. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='home-content-links'>
                                            <ul>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                                <li><Link to='#' className='home-content-childlink'>Card</Link><i className="fa-solid fa-arrow-right-long"></i></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <button className='header-login-btn'>Login</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MenuPage