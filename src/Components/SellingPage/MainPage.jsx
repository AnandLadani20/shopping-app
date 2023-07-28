import React from 'react';
import heroImage from '../../Assests/hero-gif/hero-removebg-preview.png'
import dhiyodhaLogo from '../../Assests/logo/Dhiyodha (1)n.png'
import productVideo from '../../Assests/video/Production.mp4'
import ModalButton from './ModalButton';
import SvgAnimation from './SvgAnimation';
import { useState } from 'react';



const MainPage = () => {
const [listitem, setListItem] = useState({
    productVideo:productVideo,
    dhiyodhaLogo:dhiyodhaLogo,
    title:"Dhiyodha",
    desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.veniam velonsectetur nam a fugiatconsectetur Eos magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
})
 const handleDhiyodha = () =>{
    setListItem( {
        color:"#1a3073",
        color2:"#4bc2ec",
        color3:"#4bc2ec",
        color4:"#4bc2ec",
        color5:"#4bc2ec",
        color6:"#4bc2ec",
        color7:"#4bc2ec",
        color8:"#4bc2ec",
        color9:"#4bc2ec",
        productVideo:productVideo,
        dhiyodhaLogo:dhiyodhaLogo,
        title:"Dhiyodha",
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.veniam velonsectetur nam a fugiatconsectetur Eos magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
     })
 }
 const handleDhishop = () =>{
    setListItem( {
        color:"#4bc2ec",
        color2:"#1a3073",
        color3:"#4bc2ec",
        color4:"#4bc2ec",
        color5:"#4bc2ec",
        color6:"#4bc2ec",
        color7:"#4bc2ec",
        color8:"#4bc2ec",
        color9:"#4bc2ec",
        productVideo:productVideo,
        dhiyodhaLogo:dhiyodhaLogo,
        title:"DhiShop",
        desc:"Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
     })}
 const handleDhichef = () =>{
    setListItem( {
        color:"#4bc2ec",
        color2:"#4bc2ec",
        color3:"#1a3073",
        color4:"#4bc2ec",
        color5:"#4bc2ec",
        color6:"#4bc2ec",
        color7:"#4bc2ec",
        color8:"#4bc2ec",
        color9:"#4bc2ec",
        productVideo:productVideo,
        dhiyodhaLogo:dhiyodhaLogo,
        title:"DhiChef",
        desc:"Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
     })}
 const handleDhicare = () =>{
    setListItem( {
        color:"#4bc2ec",
        color2:"#4bc2ec",
        color3:"#4bc2ec",
        color4:"#1a3073",
        color5:"#4bc2ec",
        color6:"#4bc2ec",
        color7:"#4bc2ec",
        color8:"#4bc2ec",
        color9:"#4bc2ec",
        productVideo:productVideo,
        dhiyodhaLogo:dhiyodhaLogo,
        title:"DhiCare",
        desc:"Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
     })}
     
 const handleDhiartist = () =>{
    setListItem( {
        color:"#4bc2ec",
        color2:"#4bc2ec",
        color3:"#4bc2ec",
        color4:"#4bc2ec",
        color5:"#1a3073",
        color6:"#4bc2ec",
        color7:"#4bc2ec",
        color8:"#4bc2ec",
        color9:"#4bc2ec",
        productVideo:productVideo,
        dhiyodhaLogo:dhiyodhaLogo,
        title:"DhiArtist",
        desc:"Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
     })}
 const handleDhiskill = () =>{
    setListItem( {
        color:"#4bc2ec",
        color2:"#4bc2ec",
        color3:"#4bc2ec",
        color4:"#4bc2ec",
        color5:"#4bc2ec",
        color6:"#1a3073",
        color7:"#4bc2ec",
        color8:"#4bc2ec",
        color9:"#4bc2ec",
        productVideo:productVideo,
        dhiyodhaLogo:dhiyodhaLogo,
        title:"DhiSkill",
        desc:"Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
     })}
 const handleDhigo = () =>{
    setListItem( {
        color:"#4bc2ec",
        color2:"#4bc2ec",
        color3:"#4bc2ec",
        color4:"#4bc2ec",
        color5:"#4bc2ec",
        color6:"#4bc2ec",
        color7:"#1a3073",
        color8:"#4bc2ec",
        color9:"#4bc2ec",
        productVideo:productVideo,
        dhiyodhaLogo:dhiyodhaLogo,
        title:"DhiGo",
        desc:"Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
     })}
 const handleDhiface = () =>{
    setListItem( {
        color:"#4bc2ec",
        color2:"#4bc2ec",
        color3:"#4bc2ec",
        color4:"#4bc2ec",
        color5:"#4bc2ec",
        color6:"#4bc2ec",
        color7:"#4bc2ec",
        color8:"#1a3073",
        color9:"#4bc2ec",
        productVideo:productVideo,
        dhiyodhaLogo:dhiyodhaLogo,
        title:"DhiFace",
        desc:"Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
     })}
 const handleDhibank = () =>{
    setListItem( {
        color:"#4bc2ec",
        color2:"#4bc2ec",
        color3:"#4bc2ec",
        color4:"#4bc2ec",
        color5:"#4bc2ec",
        color6:"#4bc2ec",
        color7:"#4bc2ec",
        color8:"#4bc2ec",
        color9:"#1a3073",
        productVideo:productVideo,
        dhiyodhaLogo:dhiyodhaLogo,
        title:"DhiBank",
        desc:"Lorem ipsum dolor sit amet, consectetur magni veniam velonsectetur nam a fugiatconsectetur adipisicing elit. Eos magn consectetur nam a fugiatconsectetur adipisicing elit. Eos magni veniam vel consectetur nam a fugia ut repudiandae voluptatum id!"
     })}
 

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
                                <SvgAnimation />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='dhiyodha-start-your-product'>
                <h1 className='text-center'>Let's Start Your Product</h1>
                <div className='container'>
                    <div className='row pt-5'>
                    <div className='col-12 col-lg-12 p-0'>
                            <div className='product-tebular-btn '>
                                <button className='btn me-2 text-light' onClick={handleDhiyodha} style={{backgroundColor:`${listitem.color}`}}>DhiYodha</button>
                                <button className='btn me-2' onClick={handleDhishop} style={{backgroundColor:`${listitem.color2}`}}>DhiShop</button>
                                <button className='btn me-2' onClick={handleDhichef} style={{backgroundColor:`${listitem.color3}`}}>DhiChef</button>
                                <button className='btn me-2' onClick={handleDhicare} style={{backgroundColor:`${listitem.color4}`}}>DhiCare</button>
                                <button className='btn me-2' onClick={handleDhiartist} style={{backgroundColor:`${listitem.color5}`}}>DhiArtist</button>
                                <button className='btn me-2' onClick={handleDhiskill} style={{backgroundColor:`${listitem.color6}`}}>DhiSkill</button>
                                <button className='btn me-2' onClick={handleDhigo} style={{backgroundColor:`${listitem.color7}`}}>DhiGo</button>
                                <button className='btn me-2' onClick={handleDhiface} style={{backgroundColor:`${listitem.color8}`}}>DhiFace</button>
                                <button className='btn me-2' onClick={handleDhibank} style={{backgroundColor:`${listitem.color9}`}}>DhiBank</button>
                            </div>
                        </div>
                    </div>
                    <div className='row dhiyodha-video-details'>
                    
                        <div className='col-12 col-md-6'>
                            <div className='dhiyodha-product-video'>
                                <video src={listitem.productVideo}  controls>
                                </video>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='product-video-content'>
                                <div className='product-brand-logo'>
                                <img src={listitem.dhiyodhaLogo} alt='dhiyodha-logo'/>
                                </div>
                                <h1>{listitem.title}</h1>
                                <p>{listitem.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default MainPage


