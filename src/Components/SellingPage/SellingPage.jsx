import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
import Footer from './Footer'
import BgEllipse from '../../Assests/hero-gif/Bg-ellipse.png'
import BgEllipse2 from '../../Assests/hero-gif/Bg-ellipse2.png'
// import logo from '../../Assests/logo/Dhiyodha (1)n.png';
// import womenImage from '../../Assests/women-seller-hub/shoping.jpg'
// import womenImage2 from '../../Assests/women-seller-hub/shopping3.png';
// import shopingSlide1 from '../../Assests/women-seller-hub/shoping-slider1.jpg'
// import reviwer from '../../Assests/testimonial/testimonial2.jpg';
// import { Link } from 'react-router-dom';
import './index.css';
// import { Pagination, Autoplay } from "swiper";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { useNavigate } from 'react-router-dom';


const SellingPage = () => {
    // const navigate = useNavigate();

    // const handleLogin = () => {

    //     navigate('/sellingsignup');
    // };
    return (
        <>
            <section className='main-selling-page-area'>
                <div className='gradient-effect-hero-area'>
                    <div className='left-corner-effect-area'>
                        <img src={BgEllipse} alt='effect' />
                    </div>
                    <div className='right-corner-effect-area'>
                        <img src={BgEllipse2} alt='effect' />
                    </div>
                </div>
                <Header />
                <MainPage />
                <Footer />
            </section>
            {/* <nav className='selling-nav'>
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
                    </div>
                    <div className='working-process-mainDetails-area'>
                        <div className='row d-flex align-items-center'>
                            <div className='col-12 col-lg-6 flex-property'>
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
                                            <div className='process-child-icon '><i class="fa-solid fa-wheelchair"></i></div>
                                            <p>DhiCareTaker</p>
                                            <div className='process-line4'></div>
                                        </div>
                                        <div className='process-child5 imgBx'>
                                            <div className='process-child-icon gradient-color'><i class="fa-solid fa-notes-medical"></i></div>
                                            <p>DhiHealthCare</p>
                                            <div className='process-line5'></div>
                                        </div>
                                        <div className='process-child6 imgBx'>
                                            <div className='process-child-icon gradient-color'><i class="fa-solid fa-plane-departure"></i></div>
                                            <p>DhiTravelings</p>
                                            <div className='process-line6'></div>
                                        </div>
                                        <div className='process-child7 imgBx'>
                                            <div className='process-child-icon gradient-color'><i class="fa-solid fa-school"></i></div>
                                            <p>DhiMentorSchool</p>
                                            <div className='process-line7'></div>
                                        </div>
                                        <div className='process-child8 imgBx'>
                                            <div className='process-child-icon gradient-color'><i class="fa-solid fa-user-plus"></i></div>
                                            <p>Dhihireme</p>
                                            <div className='process-line8'></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <div className='working-process-content-area'>
                                    <h3>DhiYodha For You</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo soluta vero eveniet numquam ab ipsam necessitatibus tempore aliquid molestias earum autem sit dolorum quaerat veritatis id eligendi laudantium, dolores iure!</p>
                                </div>
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
                                    <div className='col-lg-6 col-md-8 col-sm-12 col-12'>
                                        <div className='women-seller-hub-fact'>
                                            <div className='women-seller-hub-childfacts'>
                                                <div className='seller-facts-title'>
                                                    <div><i class="fa-solid fa-clock"></i></div>
                                                    <h4>Set your own<br /> hours</h4>
                                                </div>
                                                <p>Lorem ipsum dolor sit, amet consectetur <br />adipisicing elit. Architecto, blanditiis!</p>
                                            </div>
                                            <div className='women-seller-hub-childfacts'>
                                                <div className='seller-facts-title'>
                                                    <div><i class="fa-solid fa-user"></i></div>
                                                    <h4>Be your own<br /> boss</h4>
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
                        <div className='col-12'>
                            <div className='women-seller-hub-thirdPage'>
                                <div className='row d-flex justify-content-center'>
                                    <div className='col-8'>
                                        <div className='women-seller-hub-process-box'>
                                            <h3 className='text-center mb-4'>This is How It Works!</h3>
                                            <div className='women-seller-hub-process'>
                                                <div className='stepper1'>
                                                    <div className='step1'>
                                                        <span className='hide-step-line'></span>
                                                        <div className='step1-icon'>1</div>
                                                        <span></span>
                                                    </div>
                                                    <p className='text-center'>Lorem ipsum dolor sit amet<br /> consectetur adipisicing elit.</p>
                                                </div>
                                                <div className='stepper1'>
                                                    <div className='step1'>
                                                        <span></span>
                                                        <div className='step1-icon'>1</div>
                                                        <span></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.</p>
                                                </div>
                                                <div className='stepper1'>
                                                    <div className='step1'>
                                                        <span></span>
                                                        <div className='step1-icon'>1</div>
                                                        <span className='hide-step-line'></span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet <br />consectetur adipisicing elit.</p>
                                                </div>
                                            </div>
                                            <p className='women-seller-hub-mail text-center'>If you have any queries about work, Please <Link to='#' className='women-seller-hub-mail-mark'>mail us</Link> </p>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='women-seller-hub-process-img-box'>
                                            <div className='seller-process-child-img-box'>
                                                <img src={womenImage2} alt='women' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='seller-reviews-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-12'>
                            <div className='seller-reviews-title'>
                                <h3>What Seller Says About Dhiyodha?</h3>
                                <p>See why customers love Dhiyodha</p>
                                <button className='seller-reviews-why-btn'>Why Dhiyodha</button>
                            </div>
                        </div>
                        <div className='col-lg-8 col-12 p-0'>

                            <div className='row'>
                                <div className='col-lg-3 g-2 seller-reviews-childbox'>

                                    <div><h1 className='text-center'>logo1</h1></div>
                                    <div className='rating-star'>
                                        <span> &#9733;</span>
                                        <span> &#9733;</span>
                                        <span> &#9733;</span>
                                        <span> &#9733;</span>
                                        <span> &#9733;</span>
                                    </div>
                                    <p>64k</p>
                                    <Link to='#' className='seller-review-learnMore-btn text-center'>Learn More</Link>
                                </div>
                                <div className='col-lg-3 g-2 seller-reviews-childbox'>
                                    <div><h1 className='text-center'>logo2</h1></div>
                                    <div className='rating-star'>
                                        <span> &#9733;</span>
                                        <span> &#9733;</span>
                                        <span> &#9733;</span>
                                        <span> &#9733;</span>
                                    </div>
                                    <p>11k</p>
                                    <Link to='#' className='seller-review-learnMore-btn text-center'>Learn More</Link>
                                </div>
                                <div className='col-lg-3 g-2 seller-reviews-childbox'>
                                    <div><h1 className='text-center'>logo3</h1></div>
                                    <div className='rating-star'>
                                        <span> &#9733;</span>
                                        <span> &#9733;</span>
                                        <span> &#9733;</span>
                                        <span> &#9733;</span>
                                    </div>
                                    <p>32k</p>
                                    <Link to='#' className='seller-review-learnMore-btn text-center'>Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-lg-8'>
                            <div className='seller-reviews-slider'>
                                <Swiper

                                    spaceBetween={30}
                                    centeredSlides={true}
                                    loop={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}

                                    modules={[Pagination, Autoplay]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 col-md-4'>
                                                <div className='seller-review-detail-slide'>
                                                    <div className='seller-img-box'>
                                                        <img src={reviwer} alt='Reviewer' />
                                                    </div>
                                                    <p>"The quality is amazing. we've had fantastic results all over the company."</p>
                                                    <h5>Charlotte</h5>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-6 col-md-8'>
                                                <div className='seller-review-img-slide'>
                                                    <div className=''>
                                                        <img src={shopingSlide1} alt='shopping-review' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 col-md-4'>
                                                <div className='seller-review-detail-slide'>
                                                    <div className='seller-img-box'>
                                                        <img src={reviwer} alt='Reviewer' />
                                                    </div>
                                                    <p>"The quality is amazing. we've had fantastic results all over the company."</p>
                                                    <h5>Charlotte</h5>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-6 col-md-8'>
                                                <div className='seller-review-img-slide'>
                                                    <div className=''>
                                                        <img src={shopingSlide1} alt='shopping-review' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div></SwiperSlide>
                                    <SwiperSlide>     <div className='row'>
                                        <div className='col-12 col-lg-6 col-md-4'>
                                            <div className='seller-review-detail-slide'>
                                                <div className='seller-img-box'>
                                                    <img src={reviwer} alt='Reviewer' />
                                                </div>
                                                <p>"The quality is amazing. we've had fantastic results all over the company."</p>
                                                <h5>Charlotte</h5>
                                            </div>
                                        </div>
                                        <div className='col-12 col-lg-6 col-md-8'>
                                            <div className='seller-review-img-slide'>
                                                <div className=''>
                                                    <img src={shopingSlide1} alt='shopping-review' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 col-md-4'>
                                                <div className='seller-review-detail-slide'>
                                                    <div className='seller-img-box'>
                                                        <img src={reviwer} alt='Reviewer' />
                                                    </div>
                                                    <p>"The quality is amazing. we've had fantastic results all over the company."</p>
                                                    <h5>Charlotte</h5>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-6 col-md-8'>
                                                <div className='seller-review-img-slide'>
                                                    <div className=''>
                                                        <img src={shopingSlide1} alt='shopping-review' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='row'>
                                            <div className='col-12 col-lg-6 col-md-4'>
                                                <div className='seller-review-detail-slide'>
                                                    <div className='seller-img-box'>
                                                        <img src={reviwer} alt='Reviewer' />
                                                    </div>
                                                    <p>"The quality is amazing. we've had fantastic results all over the company."</p>
                                                    <h5>Charlotte</h5>
                                                </div>
                                            </div>
                                            <div className='col-12 col-lg-6 col-md-8'>
                                                <div className='seller-review-img-slide'>
                                                    <div className=''>
                                                        <img src={shopingSlide1} alt='shopping-review' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='start-seller-journy-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div className='start-seller-journy-details'>
                                <h2>Start Your Seller Journey</h2>
                                <p>Be DhiYodha and Give Contribution to <br />Your Family and Our Nation.</p>
                                <button onClick={handleLogin} >Start Selling</button>
                                <span>It take only 15 minutes to setup your account</span>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'></div>
                    </div>
                </div>
            </section> */}

        </>
    )
}

export default SellingPage