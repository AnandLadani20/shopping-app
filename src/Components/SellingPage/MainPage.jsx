import React, { useRef, useEffect } from 'react';
import heroImage from '../../Assests/hero-gif/Untitled-1 (1).png'
import productSeller from '../../Assests/icon/product-seller.png'
import serviceSeller from '../../Assests/icon/service-seller.png'
import skillSeller from '../../Assests/icon/skills-seller.png'
import mentor3 from '../../Assests/icon/mentor-3.png'
import womenIcon from '../../Assests/icon/woman.png'
import womenSupportIcon from '../../Assests/icon/woman-support.png'
import RegisterIcon from '../../Assests/icon/register.png'
import BusinessCardIcon from '../../Assests/icon/business-card.png'
import ProductServiceIcon from '../../Assests/icon/product.png'
import EarnMoneyIcon from '../../Assests/icon/salary (1).png'
import FamilyIcon from '../../Assests/icon/family.png'
import BankIcon from '../../Assests/icon/bank (1).png'
import AuditIcon from '../../Assests/icon/scale_1200.png'
import dhiyodhaLogo from '../../Assests/logo/Dhiyodha (1)n.png'
import productVideo from '../../Assests/video/Production.mp4'
import ModalSellingButton from './ModalSellingButton';
import SvgAnimation from './SvgAnimation';
import VideoPlayer from './VideoPlayer';
import { useState } from 'react';

import ModalReview from './ModalReview'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import Shared from './Shared.js';
import Vision from './Vision';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageUpload from '../SellingSignupPage/ImageUpload.jsx';

const MainPage = () => {

    const [reviewData, setRevieData] = useState(Shared.testimonialDatas)

    useEffect(() => {
        setRevieData(reviewData)
    }, [reviewData])


    const [listitem, setListItem] = useState({
        productVideo: productVideo,
        dhiyodhaLogo: dhiyodhaLogo,
        title: "Dhiyodha",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.veniam velonsectetur nam a fugiatconsectetur Eos magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
    })
    const handleDhiyodha = () => {
        setListItem({
            color: "linear-gradient(to right,#0c52e5,#099cd3,#38bf9b)",
            color2: "none",
            color3: "none",
            color4: "none",
            color5: "none",
            color6: "none",
            color7: "none",
            color8: "none",
            color9: "none",
            productVideo: productVideo,
            dhiyodhaLogo: dhiyodhaLogo,
            title: "Dhiyodha",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.veniam velonsectetur nam a fugiatconsectetur Eos magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        })
    }
    const handleDhishop = () => {
        setListItem({
            color: "none",
            color2: "linear-gradient(to right,#0c52e5,#099cd3,#38bf9b)",
            color3: "none",
            color4: "none",
            color5: "none",
            color6: "none",
            color7: "none",
            color8: "none",
            color9: "none",
            productVideo: productVideo,
            dhiyodhaLogo: dhiyodhaLogo,
            title: "DhiShop",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        })
    }
    const handleDhichef = () => {
        setListItem({
            color: "none",
            color2: "none",
            color3: "linear-gradient(to right,#0c52e5,#099cd3,#38bf9b)",
            color4: "none",
            color5: "none",
            color6: "none",
            color7: "none",
            color8: "none",
            color9: "none",
            productVideo: productVideo,
            dhiyodhaLogo: dhiyodhaLogo,
            title: "DhiChef",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        })
    }
    const handleDhicare = () => {
        setListItem({
            color: "none",
            color2: "none",
            color3: "none",
            color4: "linear-gradient(to right,#0c52e5,#099cd3,#38bf9b)",
            color5: "none",
            color6: "none",
            color7: "none",
            color8: "none",
            color9: "none",
            productVideo: productVideo,
            dhiyodhaLogo: dhiyodhaLogo,
            title: "DhiCare",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        })
    }

    const handleDhiartist = () => {
        setListItem({
            color: "none",
            color2: "none",
            color3: "none",
            color4: "none",
            color5: "linear-gradient(to right,#0c52e5,#099cd3,#38bf9b)",
            color6: "none",
            color7: "none",
            color8: "none",
            color9: "none",
            productVideo: productVideo,
            dhiyodhaLogo: dhiyodhaLogo,
            title: "DhiArtist",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        })
    }
    const handleDhiskill = () => {
        setListItem({
            color: "none",
            color2: "none",
            color3: "none",
            color4: "none",
            color5: "none",
            color6: "linear-gradient(to right,#0c52e5,#099cd3,#38bf9b)",
            color7: "none",
            color8: "none",
            color9: "none",
            productVideo: productVideo,
            dhiyodhaLogo: dhiyodhaLogo,
            title: "DhiSkill",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        })
    }
    const handleDhigo = () => {
        setListItem({
            color: "none",
            color2: "none",
            color3: "none",
            color4: "none",
            color5: "none",
            color6: "none",
            color7: "linear-gradient(to right,#0c52e5,#099cd3,#38bf9b)",
            color8: "none",
            color9: "none",
            productVideo: productVideo,
            dhiyodhaLogo: dhiyodhaLogo,
            title: "DhiGo",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        })
    }
    const handleDhiface = () => {
        setListItem({
            color: "none",
            color2: "none",
            color3: "none",
            color4: "none",
            color5: "none",
            color6: "none",
            color7: "none",
            color8: "linear-gradient(to right,#0c52e5,#099cd3,#38bf9b)",
            color9: "none",
            productVideo: productVideo,
            dhiyodhaLogo: dhiyodhaLogo,
            title: "DhiFace",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        })
    }
    const handleDhibank = () => {
        setListItem({
            color: "none",
            color2: "none",
            color3: "none",
            color4: "none",
            color5: "none",
            color6: "none",
            color7: "none",
            color8: "none",
            color9: "linear-gradient(to right,#0c52e5,#099cd3,#38bf9b)",
            productVideo: productVideo,
            dhiyodhaLogo: dhiyodhaLogo,
            title: "DhiBank",
            desc: "Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
        })
    }

    const slideRef = useRef()
    const handlePreviousSlide = () => {
        slideRef.current.swiper.slidePrev()
    }
    const handleNextSlide = () => {
        slideRef.current.swiper.slideNext()
    }
    useEffect(() => {
        AOS.init({
          once: true, // This will make the animation happen only once
        });
    
        // Clean up AOS on component unmount
        return () => {
          AOS.refresh(); // Optional: reset AOS when the component is unmounted
        };
      }, []);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>

            {/* //////////////// Hero-page Area /////////////// */}

            <section className='selling-mainpage-hero-area'>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-5 col-md-6 col-12'>
                            <div className='selling-mainpage-hero-details-area' data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-sine">
           <ImageUpload />
                                <h1>Be Dhiyodha By Launching Your Business</h1>
                                <p>Women are the Yodha, She can be the Strength of Nation for Selling Your
                                    Product, Services, Skill and Experience.</p>
                                <button onClick={handleOpen}>Start Selling<i className="fa-solid fa-arrow-right-long"></i></button>
                                <ModalSellingButton handleClose={handleClose} open={open} />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <div className='selling-mainpage-hero-img-area' data-aos="zoom-in" data-aos-duration="1000">
                                <div className='hero-img-area-rounded'>
                                    <div className='hero-img-area-rounded-cicleicon4'>
                                        <span className='cicleicon4Style'></span>
                                        {/* <FaRegCreditCard className='cicleicon4Style' /> */}
                                    </div>
                                    <div className='hero-img-area-rounded-cicleicon5'>
                                        {/* <BsCart4 className='cicleicon5Style' /> */}
                                        <span className='cicleicon5Style'>cart</span>
                                    </div>
                                    <div className='hero-img-area-rounded-cicleicon6'>
                                        <span className='cicleicon6Style'>currency</span>
                                        {/* <BsCurrencyRupee className='cicleicon6Style' /> */}
                                    </div>
                                </div>
                                <div className='hero-img-area-innerchild-rounded'>
                                    <div className='hero-img-area-rounded-cicleicon'></div>
                                    <div className='hero-img-area-rounded-cicleicon2'></div>
                                    <div className='hero-img-area-rounded-cicleicon3'></div>
                                </div>
                                <div className='hero-img-area-inner-rounded'>
                                    <img src={heroImage} alt='shopping' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sellerList-container' >
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-10'>
                            <div className='sellerListBox ' >
                                <div className='row d-flex flex-wrap justify-content-center'>
                                    <div className='col-6 col-md-4  col-lg-3 mt-4'>
                                        <div className='product-seller-box shadow' data-aos="flip-up">
                                            <div><img src={productSeller} height={60} alt='' /></div>
                                            <p className='text-light mt-3'>3000</p>
                                            <p className='text-light'>Product-Seller</p>
                                        </div></div>
                                    <div className='col-6 col-md-4  col-lg-3 mt-4'>
                                        <div className='service-seller-box shadow' data-aos="flip-up">
                                            <div><img src={serviceSeller} height={60} alt='' /></div>
                                            <p className='text-light mt-3'>5000</p>
                                            <p className='text-light'>Service-Seller</p>
                                        </div></div>
                                    <div className='col-6 col-md-4  col-lg-3 mt-4'>
                                        <div className='skills-seller-box shadow' data-aos="flip-up">
                                            <div><img src={skillSeller} height={60} alt='' /></div>
                                            <p className='text-light mt-3'>4000</p>
                                            <p className='text-light'>Skills-Seller</p>
                                        </div>
                                    </div>
                                    <div className='col-6 col-md-4  col-lg-3 mt-4'>
                                        <div className='mentors-seller-box shadow' data-aos="flip-up">
                                            <div><img src={mentor3} height={60} alt='' /></div>
                                            <p className='text-light mt-3'>2000</p>
                                            <p className='text-light'>Mentors-Seller</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* //////////////// Dhiyodha-family Area /////////////// */}

            <section className='dhiyodha-family-page-area'>
                <div className='container'>
                    <div className='row border-family-page p-lg-5'>
                        <div className='col-12'>
                            <div className='dhiyodha-family-title' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                                <h1>DhiYodha Family</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae soluta consequatur voluptatum nam<br /> eaque cumque dolore iusto, ex nesciunt. A officia vitae incidunt laborum aliquam veritatis, architecto molestiae esse eos.</p>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='dhiyodha-family-details' data-aos="fade-up"
                                data-aos-duration="3000">
                                <SvgAnimation />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='dhiyodha-start-your-product'>
                {/* <div className='left-corner-effect-area'>
                        <img src={BgEllipse} alt='effect' />
                    </div> */}
                <div className='container start-your-product-area'>
                    <div className='row start-your-product-title' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div className='col-12'><h1 className='text-center'>Let's Start Your Product</h1></div>
                    </div>
                    <div className='row pt-5 d-flex justify-content-center' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <div className='col-12 col-lg-8 p-0'>
                            <div className='product-tebular-btn'>
                                <div className='product-tebular-btn-box'>
                                    <button className='me-2 text-light' onClick={handleDhiyodha} style={{ backgroundImage: `${listitem.color}` }}>DhiYodha</button>
                                    <button className='me-2' onClick={handleDhishop} style={{ backgroundImage: `${listitem.color2}` }}>DhiShop</button>
                                    <button className='me-2' onClick={handleDhichef} style={{ backgroundImage: `${listitem.color3}` }}>DhiChef</button>
                                    <button className='me-2' onClick={handleDhicare} style={{ backgroundImage: `${listitem.color4}` }}>DhiCare</button>
                                    <button className='me-2' onClick={handleDhiartist} style={{ backgroundImage: `${listitem.color5}` }}>DhiArtist</button>
                                    <button className='me-2' onClick={handleDhiskill} style={{ backgroundImage: `${listitem.color6}` }}>DhiSkill</button>
                                    <button className='me-2' onClick={handleDhigo} style={{ backgroundImage: `${listitem.color7}` }}>DhiGo</button>
                                    <button className='me-2' onClick={handleDhiface} style={{ backgroundImage: `${listitem.color8}` }}>DhiFace</button>
                                    <button className='me-2' onClick={handleDhibank} style={{ backgroundImage: `${listitem.color9}` }}>DhiBank</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row dhiyodha-video-details'>
                        <div className='col-12 col-md-12 col-lg-6 pt-5'>
                            <div className='dhiyodha-product-video p-0' data-aos="fade-right">
                                <VideoPlayer productVideo={productVideo} dhiyodhaLogo={listitem.dhiyodhaLogo} title={listitem.title} />
                            </div>
                        </div>
                        <div className='col-12 col-md-12 col-lg-6'>
                            <div className='product-video-content' data-aos="fade-left">
                                <div className='product-brand-logo'>
                                    <img src={listitem.dhiyodhaLogo} alt='dhiyodha-logo' />
                                </div>
                                <h1>{listitem.title}</h1>
                                <p>{listitem.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <section className='how-does-dhiyodha-work-area'>
                <div className='container'>
                    <div className='row'>
                        <div className='dhiyodha-work-title' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                            <h1>How does Dhiyodha Work?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam cumque ipsa consequuntur saepe adipisci consequatur.</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-12'>
                            <div className='flow-chart-box'>
                                <div className='work-area-main-box'>
                                    <div className='charted-mainbox2-area'>
                                        <div className='charted-box2-area' data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="1000">
                                            <div className='first-chartedlayout2-box2'>DhiShop</div>
                                            <div className='middle-chartedlayout2-box2'>DhiChef</div>
                                            <div className='third-chartedlayout2-box2'>DhiCare</div>
                                            <div className='fourth-chartedlayout2-box2'>DhiArtist</div>
                                        </div>
                                    </div>
                                    <div className='charted-box1-area' data-aos="fade-right" data-aos-duration="1000">
                                        <div className='flow-start-area'><img src={womenIcon} alt='' /><h5>Women</h5></div>
                                        <div className='first-chartedlayout-box'>Register<br /> Business<div className='register-icon-imgbg'><img src={RegisterIcon} alt='' /></div></div>
                                        <div className='flow-chart-gradient-orange'><div className='middle-chartedlayout-box '>
                                            <h6>  Register Business <br />On<br /> Dhiyodha</h6>
                                            <div className='charted-flow-video-box'>
                                                <p className='charted-flow-video'>video play</p>
                                                {/* <AiFillPlayCircle  /> */}
                                            </div>
                                        </div>
                                        </div>
                                        <div className='third-chartedlayout-box'>Inspector Will<br /> Audit Business<div className='audit-icon-imgbg'><img src={AuditIcon} alt='' /></div></div>
                                        <div className='flow-end-area'><img src={womenSupportIcon} alt='' /><h5>Support<br /> Team</h5></div>

                                    </div>
                                    <div className='charted-box3-area' data-aos="fade-up"
                                        data-aos-duration="1000">
                                        <div className='first-chartedlayout3-box3'>DhiSkill</div>
                                        <div className='middle-chartedlayout3-box3'>DhiGo</div>
                                        <div className='third-chartedlayout3-box3'>DhiFace</div>
                                        <div className='fourth-chartedlayout3-box3'>DhiBank</div>
                                    </div>
                                    <div className='user-business-flow' data-aos="fade-left" data-aos-duration="1000">
                                        <div className='flow-chart-gradient-blue'><div className='fourth-chartedlayout-box1 flow-box-style'> Invest Money<br /> In DhiBank <div className='dhiyodhaBank-icon-imgbg'><img src={BankIcon} height={40} alt='' /></div></div></div>
                                        <div className='flow-chart-gradient-blue'><div className='fourth-chartedlayout4-box2 flow-box-style'>Earn <br />Money <div className='earnMoney-icon-imgbg'><img src={EarnMoneyIcon} height={40} alt='' /></div></div></div>
                                        <div className='fourth-chartedlayout4-box3 '>Welcome<br className='media-none' /> To<br /> Dhiyodha Family <div className='dhiyodhafamily-icon-imgbg'><img src={FamilyIcon} alt='' /></div></div>
                                        <div className='flow-chart-gradient-blue'><div className='fourth-chartedlayout4-box4 flow-box-style'> ProductListing<br /> & Services <div className='productService-icon-imgbg'><img src={ProductServiceIcon} height={40} alt='' /></div></div></div>
                                        <div className='flow-chart-gradient-blue'><div className='fourth-chartedlayout4-box5 flow-box-style'> Dhiyodha<br /> Business Card <div className='businessCard-icon-imgbg'><img src={BusinessCardIcon} height={40} alt='' /></div></div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Vision />
            <section className='dhiyodha-sellingpage-reviews' data-aos="fade-up"
                data-aos-duration="3000">
                <div className='container'>
                    <div className='row'>
                        <div className='col-12'>
                            <h1 className='text-center text-light'>Review of Dhiyodha Family</h1>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='reviews-carousel-slider'>
                                <div className='pagination-slide'>
                                    <span>
                                        <span onClick={handlePreviousSlide}>previous</span>
                                        {/* <LiaLessThanSolid  /> */}
                                    </span>
                                    <span className='swiper-paginations'></span>
                                    <span onClick={handleNextSlide} ><span>Next</span></span>
                                </div>
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    pagination={{
                                        clickable: true,
                                        el: '.swiper-paginations',
                                        type: "fraction"

                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                    ref={slideRef}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        390: {
                                            slidesPerView: 1.5,
                                        },
                                        502: {
                                            slidesPerView: 2,
                                        },
                                        802: {
                                            slidesPerView: 2.5,
                                        },
                                        992: {
                                            slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 3
                                        }
                                    }}
                                >
                                    {
                                        reviewData.map((reviewData) => {
                                            return <SwiperSlide key={reviewData.id}><img src={reviewData.imgsrc} height={300} style={{ width: "100%" }} alt='' /> <div className='testimonial-reviews-inform'><ModalReview reviewData={reviewData.videosrc} />
                                                <div className='testimonial-review-desc'><div><h5 className='text-start'>{reviewData.testimonialName}</h5><p className='text-light text-start'>{reviewData.desc}</p></div><p className='text-light'>{reviewData.date}</p></div></div>
                                            </SwiperSlide>
                                        })
                                    }
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default MainPage


