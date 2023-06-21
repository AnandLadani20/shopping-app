import testimonial from '../../Assests/testimonial/person1.png';
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";


const MainPage = () => {


    return (
        <>
            <main>
                <section className='main-hero-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <div className='main-heading'>
                                    <h1>Digital Watches<br /> That Are Best For <br /><span>Daily Use</span></h1>
                                    <p>Lorem ipsum dolor sit amet consectetur <br />adipisicing elit. Odio, cumque.</p>
                                    <button>Explore More</button>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6'></div>
                        </div>
                    </div>
                </section>

                <section className='main-services-area'>
                    <div className='container'>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-12 col-md-3 col-lg-3'>
                                <div className='service-box'>
                                    <div className='text-center'><i class="fa-solid fa-truck-fast"></i></div>
                                    <h4>Free Shipping</h4>
                                    <p>Free shipping on all online order</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-3 col-lg-3'>
                                <div className='service-box'>
                                    <div className='text-center'><i class="fa-solid fa-headset"></i></div>
                                    <h4>24/7 Support</h4>
                                    <p>Contact us for any time for your problem</p>
                                </div>
                            </div>
                            <div className='col-12 col-md-3 col-lg-3'>
                                <div className='service-box'>
                                    <div className='text-center'><i class="fa-solid fa-address-card"></i></div>
                                    <h4>Secure Payment</h4>
                                    <p>Hey,don't worry. we ensure secure transection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='main-products-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='sec-title'>
                                    <h1>Take Our Product</h1>
                                    <p>We Provide marketing services to startups and small<br />business looking for a  partner of their digital</p>
                                </div>
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center flex-wrap mt-3'>
                            <div className='col-12 col-md-3 col-lg-4'>
                                <div className='product-box'>
                                    <div className='product-img'>
                                        <div className='product-img_img'>
                                            image
                                        </div>
                                    </div>
                                    <p>Apple Store Watch,Color:blue</p>
                                    <div className='product-price'>
                                        <p>$110</p>
                                        <div className='rating-star'>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                        </div>
                                    </div>
                                    <div className='product-btn'>
                                        <button className='addCart-btn'>Add To Cart</button>
                                        <button className='buyItem-btn'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-3 col-lg-4'>
                                <div className='product-box'>
                                    <div className='product-img'>
                                        <div className='product-img_img'>
                                            image
                                        </div>
                                    </div>
                                    <p>Apple Store Watch,Color:blue</p>
                                    <div className='product-price'>
                                        <p>$110</p>
                                        <div className='rating-star'>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                        </div>
                                    </div>
                                    <div className='product-btn'>
                                        <button className='addCart-btn'>Add To Cart</button>
                                        <button className='buyItem-btn'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-3 col-lg-4'>
                                <div className='product-box'>
                                    <div className='product-img'>
                                        <div className='product-img_img'>
                                            image
                                        </div>
                                    </div>
                                    <p>Apple Store Watch,Color:blue</p>
                                    <div className='product-price'>
                                        <p>$110</p>
                                        <div className='rating-star'>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                        </div>
                                    </div>
                                    <div className='product-btn'>
                                        <button className='addCart-btn'>Add To Cart</button>
                                        <button className='buyItem-btn'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-3 col-lg-4'>
                                <div className='product-box'>
                                    <div className='product-img'>
                                        <div className='product-img_img'>
                                            image
                                        </div>
                                    </div>
                                    <p>Apple Store Watch,Color:blue</p>
                                    <div className='product-price'>
                                        <p>$110</p>
                                        <div className='rating-star'>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                        </div>
                                    </div>
                                    <div className='product-btn'>
                                        <button className='addCart-btn'>Add To Cart</button>
                                        <button className='buyItem-btn'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-3 col-lg-4'>
                                <div className='product-box'>
                                    <div className='product-img'>
                                        <div className='product-img_img'>
                                            image
                                        </div>
                                    </div>
                                    <p>Apple Store Watch,Color:blue</p>
                                    <div className='product-price'>
                                        <p>$110</p>
                                        <div className='rating-star'>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                        </div>
                                    </div>
                                    <div className='product-btn'>
                                        <button className='addCart-btn'>Add To Cart</button>
                                        <button className='buyItem-btn'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-3 col-lg-4'>
                                <div className='product-box'>
                                    <div className='product-img'>
                                        <div className='product-img_img'>
                                            image
                                        </div>
                                    </div>
                                    <p>Apple Store Watch,Color:blue</p>
                                    <div className='product-price'>
                                        <p>$110</p>
                                        <div className='rating-star'>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                            <span> &#9733;</span>
                                        </div>
                                    </div>
                                    <div className='product-btn'>
                                        <button className='addCart-btn'>Add To Cart</button>
                                        <button className='buyItem-btn'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='main-about-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <div className='main-about-content'>
                                    <h6>About Our Watch</h6>
                                    <h2>For Easy Living,Get The Best & <br />Fashionable Smartwatch</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, culpa?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eum inventore fugiat voluptates nemo quas natus totam magni quam deserunt impedit et, repellat animi dicta dolore. Illo neque repellat minima.</p>

                                    <div className='about-important-point'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>CPU Manufacture:QUALCOMM</p>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>CPU Manufacture:QUALCOMM</p>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>CPU Manufacture:QUALCOMM</p>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>CPU Manufacture:QUALCOMM</p>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>CPU Manufacture:QUALCOMM</p>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>CPU Manufacture:QUALCOMM</p>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>CPU Manufacture:QUALCOMM</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button>Read More</button>
                                </div>
                            </div>
                            <div className='col-12 col-md-6 col-lg-6'></div>
                        </div>
                    </div>
                </section>

                <section className='main-choose-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-md-6 col-lg-6'></div>
                            <div className='col-12 col-md-6 col-lg-6'>
                                <div className='main-choose-content'>
                                    <h6>Why Choose Us</h6>
                                    <h2>Choice Our Best & Fashionable <br />Products</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, ipsa?</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, ab ipsa. Odit, ad? Quo, at animi. Non veritatis, libero aliquam similique debitis asperiores tempora fuga ipsa, animi enim dicta magnam.</p>
                                    <div className='choose-important-point'>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>1 year Warranty</p>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>Authentics Product</p>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>Refund Policy</p>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>Dedicated Support</p>
                                                </div>
                                            </div>
                                            <div className='col-6'>
                                                <div className='points'>
                                                    <span><i class="fa-solid fa-caret-right"></i></span>
                                                    <p>Free Shipping</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='main-offer-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='offer-content'>
                                    <h5>Limited Time Offer</h5>
                                    <h2>Discount 50% On All SX40 Model Product</h2>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo illum dolores minus laborum!<br /> Odit minus quaerat saepe voluptatibus, deleniti corporis!</p>
                                </div>
                            </div>
                            <div className='col-12 margin-top-50'>
                                <div className='row'>
                                    <div className='col-4'>
                                        <div className='offer-boxes'>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='offer-boxes'>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='offer-boxes'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='product-demo-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='co-12'>
                                <div className='product-demo-content'>
                                    <h5>Product Demo</h5>
                                    <h2>Get Product More Information Frome The Video</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos praesentium fuga quam <br />incidunt itaque eum voluptatum harum veniam exercitationem adipisci.</p>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='product-demo-video'>
                                    <div className='demo-video-box'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='testimonal-area'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='sec-title'>
                                    <h1>Our Testimonial</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dolorem deleniti<br /> aut ducimus saepe et praesentium officiis eum error molestiae.</p>
                                </div>
                            </div>
                            <div className='col-12'>
                                <div className='testimonial-slider margin-top-50'>

                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={10}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        breakpoints={{
                                            "@0.00": {
                                                slidesPerView: 1,
                                                spaceBetween: 10,
                                            },
                                            "@0.75": {
                                                slidesPerView: 2,
                                                spaceBetween: 20,
                                            },
                                            "@1.00": {
                                                slidesPerView: 3,
                                                spaceBetween: 40,
                                            },
                                            "@1.50": {
                                                slidesPerView: 4,
                                                spaceBetween: 50,
                                            },
                                        }}
                                        modules={[Pagination]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum accusantium qui ab veniam dolore?</p>
                                            <div className='testimonial-info'>
                                                <div className='testimonial-img'>
                                                    <img src={testimonial} />
                                                </div>
                                                <div className='testimonial-title'>
                                                    <h6>Jonny Wolson</h6>
                                                    <p>HR Executive</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum accusantium qui ab veniam dolore?</p>
                                            <div className='testimonial-info'>
                                                <div className='testimonial-img'>
                                                    <img src={testimonial} />
                                                </div>
                                                <div className='testimonial-title'>
                                                    <h6>Jonny Wolson</h6>
                                                    <p>HR Executive</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum accusantium qui ab veniam dolore?</p>
                                            <div className='testimonial-info'>
                                                <div className='testimonial-img'>
                                                    <img src={testimonial} />
                                                </div>
                                                <div className='testimonial-title'>
                                                    <h6>Jonny Wolson</h6>
                                                    <p>HR Executive</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum accusantium qui ab veniam dolore?</p>
                                            <div className='testimonial-info'>
                                                <div className='testimonial-img'>
                                                    <img src={testimonial} />
                                                </div>
                                                <div className='testimonial-title'>
                                                    <h6>Jonny Wolson</h6>
                                                    <p>HR Executive</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum accusantium qui ab veniam dolore?</p>
                                            <div className='testimonial-info'>
                                                <div className='testimonial-img'>
                                                    <img src={testimonial} />
                                                </div>
                                                <div className='testimonial-title'>
                                                    <h6>Jonny Wolson</h6>
                                                    <p>HR Executive</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum accusantium qui ab veniam dolore?</p>
                                            <div className='testimonial-info'>
                                                <div className='testimonial-img'>
                                                    <img src={testimonial} />
                                                </div>
                                                <div className='testimonial-title'>
                                                    <h6>Jonny Wolson</h6>
                                                    <p>HR Executive</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum accusantium qui ab veniam dolore?</p>
                                            <div className='testimonial-info'>
                                                <div className='testimonial-img'>
                                                    <img src={testimonial} />
                                                </div>
                                                <div className='testimonial-title'>
                                                    <h6>Jonny Wolson</h6>
                                                    <p>HR Executive</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum accusantium qui ab veniam dolore?</p>
                                            <div className='testimonial-info'>
                                                <div className='testimonial-img'>
                                                    <img src={testimonial} />
                                                </div>
                                                <div className='testimonial-title'>
                                                    <h6>Jonny Wolson</h6>
                                                    <p>HR Executive</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod eum accusantium qui ab veniam dolore?</p>
                                            <div className='testimonial-info'>
                                                <div className='testimonial-img'>
                                                    <img src={testimonial} />
                                                </div>
                                                <div className='testimonial-title'>
                                                    <h6>Jonny Wolson</h6>
                                                    <p>HR Executive</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                       
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default MainPage