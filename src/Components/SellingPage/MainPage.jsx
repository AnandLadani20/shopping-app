import React from 'react';
import heroImage from '../../Assests/hero-gif/hero-removebg-preview.png'
import logoImage from '../../Assests/logo/Dhiyodha color.png'
import ellipsImage3 from '../../Assests/hero-gif/Bg-ellipse3.png'
import ModalButton from './ModalButton';




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
                                <div className='row'>
                                    <div className='dhiyodha-family-ellipse-image'>
                                        <img src={ellipsImage3} alt='elipse' />
                                    </div>
                                    <div className='col-4'>
                                        <div className='dhiyodha-family-details-box1'>
                                            <ul>
                                                <li>Dhibag</li>
                                                <li>DhiKitchen</li>
                                                <li>DhiParlour</li>
                                                <li>DhiCareTaker</li>
                                                <li>DhiHealthCare</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='col-4'>
                                        <div className='dhiyodha-family-logo'>
                                            <img src={logoImage} alt='color-logo' />
                                        </div>
                                    </div>

                                    <div className='col-4'>
                                        <div className='dhiyodha-family-details-box2'>
                                            <ul>
                                                <li>DhiTravelings</li>
                                                <li>DhiMentorSchool</li>
                                                <li>Dhihireme</li>
                                                <li>DhiCareTaker</li>
                                                <li>DhiHealthCare</li>
                                            </ul>
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

export default MainPage


