import React from 'react';
import heroImage from '../../Assests/hero-gif/hero-removebg-preview.png'

import ModalButton from './ModalButton';
import SvgAnimation from './SvgAnimation';


const MainPage = () => {



    return (
        <>

            {/* //////////////// Hero-page Area /////////////// */}

            <section className='selling-mainpage-hero-area'>

                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='selling-mainpage-hero-details-area'>
                                <h6>Digital Shopping Plateform</h6>
                                <h1>Launch your Product with us</h1>
                                <p>Whether you’re a financial institution, a fintech startup or an established brand looking for new financial opportunities, Galileo’s proven financial technology platform can help you launch and build your own digital bank.</p>

                                <ModalButton />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-12'>
                            <div className='selling-mainpage-hero-img-area'>
                                <img src={heroImage} alt='shopping' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* //////////////// Dhiyodha-family Area /////////////// */}

            <section className='dhiyodha-family-page-area'>
                <div className='container'>
                    <div className='row border-family-page p-5'>
                        <div className='col-12'>
                            <div className='dhiyodha-family-title'>
                                <h1>DhiYodha Family</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae soluta consequatur voluptatum nam<br /> eaque cumque dolore iusto, ex nesciunt. A officia vitae incidunt laborum aliquam veritatis, architecto molestiae esse eos.</p>
                            </div>
                        </div>
                        <div className='col-12'>
                            <div className='dhiyodha-family-details'>
                            <SvgAnimation/>
                           
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
               
            </section>

        </>
    )
}

export default MainPage


