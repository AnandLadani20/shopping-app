import React from 'react'
import Header from './Header'
import MainPage from './MainPage'
// import Footer from './Footer'
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
                {/* <Footer /> */}
            </section>
          

        </>
    )
}

export default SellingPage