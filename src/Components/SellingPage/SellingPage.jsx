import React from 'react'
// import Header from './Header'
// import MainPage from './MainPage'
// import Footer from './Footer'
import logo from '../../Assests/logo/Dhiyodha (1)n.png';
import womenImage from '../../Assests/women-seller-hub/shoping.jpg'
import { Link } from 'react-router-dom';
import './index.css';

const SellingPage = () => {
    // const your =0;
    return (
        <>
            {/* <Header />
            <MainPage/>
            <Footer/> */}

            <nav className='selling-nav'>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='main-logo'>
                            <Link to="#"><img src={logo} alt='logo' height={60} /></Link>
                        </div>
                        <div className='selling-menu-title'>
                            <ul>
                                <li><Link to='#' className='border-active'>Home</Link></li>
                                <li><Link to='#' className='border-show'>About</Link></li>
                                <li><Link to='#' className='border-show'>Service</Link></li>
                                <li><Link to='#' className='border-show'>Product</Link></li>
                                <li><Link to='#' className='border-show'>Customer</Link></li>
                                <li><Link to='#' className='border-show'>Contact</Link></li>
                            </ul>
                        </div>
                        <div className='search-items'>
                            <div className='right-side-header'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <span></span>
                                <i className="fa-solid fa-phone-volume"></i>
                                <Link to='#' className='customer-care'>+8801747913966</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <section className='main-hero-area'>
                <div className='container'>
                    <div className='row d-flex flex-column align-items-center justify-content-center'>
                        <div className='col-6'>
                            <div className='main-hero-details-area text-center'>
                                <h2>DhiYodha : The Strength of Nation</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet optio omnis unde <br />necessitatibus autem at quidem suscipit sapiente veniam minima!</p>
                                <div className='main-hero-button-area'>
                                    <button className='started-btn'>Get Started</button>
                                    <button className='contactus-btn'>Contact Us</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-6 d-flex justify-content-center'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/UCg4fSx2HgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </section>
            <section className='working-process-area'>
                <div className='container'>
                    <div className='row d-flex flex-column align-items-center justify-content-center'>
                        <div className='col-6'>
                            <div className='working-process-details-area text-center'>
                                <h5>Working Process</h5>
                                <h3>See Every Step We take<br /> for Growing up Your Business</h3>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='working-process-img-area d-flex flex-column align-items-center justify-content-centers'>
                                <div className='working-process-title'>DhiYodha</div>
                                <div className='process-vertical-line'></div>
                                {/* <div className='process-horizontal-line'></div> */}
                                <div className='process-item-box'>
                                    <div className='process-items child-item1'>
                                        <div className='child-vertical-line'> </div>
                                        <div className='vertical-box'><i class="fa-solid fa-bag-shopping"></i></div>
                                        <p>Dhibag</p>
                                    </div>
                                    <div className='process-items child-item2'>
                                        <div className='child-vertical-line'> </div>
                                        <div className='vertical-box'><i class="fa-solid fa-fire-burner"></i></div>
                                        <p>DhiKitchen</p>
                                    </div>
                                    <div className='process-items child-item3'>
                                        <div className='child-vertical-line'> </div>
                                        <div className='vertical-box'><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                                        <p>DhiParlour</p>
                                    </div>
                                    <div className='process-items child-item4'>
                                        <div className='child-vertical-line'> </div>
                                        <div className='vertical-box'><i class="fa-solid fa-wheelchair"></i></div>
                                        <p>DhiCareTaker</p>
                                    </div>
                                    <div className='process-items child-item5'>
                                        <div className='child-vertical-line'> </div>
                                        <div className='vertical-box'><i class="fa-solid fa-notes-medical"></i></div>
                                        <p>DhiHealthCare</p>
                                    </div>
                                    <div className='process-items child-item6'>
                                        <div className='child-vertical-line'> </div>
                                        <div className='vertical-box'><i class="fa-solid fa-plane-departure"></i></div>
                                        <p>DhiTravelings</p>
                                    </div>
                                    <div className='process-items child-item7'>
                                        <div className='child-vertical-line'> </div>
                                        <div className='vertical-box'><i class="fa-solid fa-school"></i></div>
                                        <p>DhiMentorSchool</p>
                                    </div>
                                    <div className='process-items child-item8'>
                                        <div className='child-vertical-line'> </div>
                                        <div className='vertical-box'><i class="fa-solid fa-user-plus"></i></div>
                                        <p>Dhihireme</p>
                                    </div>
                                    <div className='process-items child-item9'>
                                        <div className='child-vertical-line'> </div>
                                        <div className='vertical-box'><i class="fa-solid fa-calendar-days"></i></div>
                                        <p>DhiEvent</p>
                                    </div>
                                    <div className='process-items child-item10'>
                                        <div className='child-vertical-line'> </div>
                                        <div className='vertical-box'><i class="fa-solid fa-lightbulb"></i></div>
                                        <p>DhiTalentMaster</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-lg-6'>
                            <div className='working-process-circle-area'>
                                <div className='working-process-childCircle-area'>
                                    <div className='process-title-area'><h1>DhiYodha</h1></div>
                                    <div className='process-child1 imgBx'>
                                        <div className='process-child-icon'><i class="fa-solid fa-bag-shopping"></i></div>
                                        <p>Dhibag</p>
                                        <div className='process-line1'></div>
                                    </div>
                                    <div className='process-child2 imgBx'>
                                        <div className='process-child-icon'><i class="fa-solid fa-fire-burner"></i></div>
                                        <p>DhiKitchen</p>
                                        <div className='process-line2'></div>
                                    </div>
                                    <div className='process-child3 imgBx'>
                                        <div className='process-child-icon'><i class="fa-solid fa-wand-magic-sparkles"></i></div>
                                        <p>DhiParlour</p>
                                        <div className='process-line3'></div>
                                    </div>
                                    <div className='process-child4 imgBx'>
                                        <div className='process-child-icon'><i class="fa-solid fa-wheelchair"></i></div>
                                        <p>DhiCareTaker</p>
                                        <div className='process-line4'></div>
                                    </div>
                                    <div className='process-child5 imgBx'>
                                        <div className='process-child-icon'><i class="fa-solid fa-notes-medical"></i></div>
                                        <p>DhiHealthCare</p>
                                        <div className='process-line5'></div>
                                    </div>
                                    <div className='process-child6 imgBx'>
                                        <div className='process-child-icon'><i class="fa-solid fa-plane-departure"></i></div>
                                        <p>DhiTravelings</p>
                                        <div className='process-line6'></div>
                                    </div>
                                    <div className='process-child7 imgBx'>
                                        <div className='process-child-icon'><i class="fa-solid fa-school"></i></div>
                                        <p>DhiMentorSchool</p>
                                        <div className='process-line7'></div>
                                    </div>
                                    <div className='process-child8 imgBx'>
                                        <div className='process-child-icon'><i class="fa-solid fa-user-plus"></i></div>
                                        <p>Dhihireme</p>
                                        <div className='process-line8'></div>
                                    </div>
                                    {/* <div className='process-child9 imgBx'>
                                        <div className='process-child-icon'></div>
                                        <p>DhiEvent</p>
                                    </div>
                                    <div className='process-child10 imgBx'>
                                        <div className='process-child-icon'></div>
                                        <p>DhiTraveling</p>
                                    </div> */}

                                </div>

                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='working-process-content-area'>
                                <h2>DhiYodha For You</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta vero eveniet numquam ab ipsam necessitatibus tempore aliquid molestias earum autem sit dolorum quaerat veritatis id eligendi laudantium, dolores iure!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='women-seller-hub-area'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='women-seller-hub-title'>
                                <h5>Women Seller Hub</h5>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='women-seller-hub-firstPage'>
                                <div className='women-seller-hub-img'>
                                    <img src={womenImage} alt='women' />
                                </div>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-6'>
                                        <div className='women-seller-hub-detail'>
                                            <p>Instant Access To Work From Home Oppotunity<br /> That Could Make You To Earn</p>
                                            <h3>$299 Per Week</h3>
                                            <span>We Strive to privide best quality work-from-home<br /> jobs without any investment. </span>
                                            <div className='d-flex align-items-center mt-4'>
                                                <div className='women-seller-hub-video-icon'><i class="fa-solid fa-play"></i></div>
                                                <button className='women-seller-hub-btn'>SIGNUP NOW</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='women-seller-hub-secondPage'>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-6'>
                                        <div className='women-seller-hub-fact'>
                                            <div className='women-seller-hub-childfacts'>
                                                <div className='seller-facts-title'>
                                                    <div><i class="fa-solid fa-clock"></i></div>
                                                    <h4>Set your own<br/> hours</h4>
                                                </div>
                                                <p>Lorem ipsum dolor sit, amet consectetur <br />adipisicing elit. Architecto, blanditiis!</p>
                                            </div>
                                            <div className='women-seller-hub-childfacts'>
                                                <div className='seller-facts-title'>
                                                    <div><i class="fa-solid fa-user"></i></div>
                                                    <h4>Be your own<br/> boss</h4>
                                                </div>
                                                <p>Lorem ipsum dolor sit, amet consectetur <br />adipisicing elit. Architecto, blanditiis!</p>
                                            </div>
                                            <div className='women-seller-hub-childfacts'>
                                                <div className='seller-facts-title'>
                                                    <div><i class="fa-solid fa-suitcase"></i></div>
                                                    <h4>Do interesting work</h4>
                                                </div>
                                                <p>Lorem ipsum dolor sit, amet consectetur <br />adipisicing elit. Architecto, blanditiis!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SellingPage