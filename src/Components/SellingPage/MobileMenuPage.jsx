import React from 'react'
import { Link } from 'react-router-dom';
import shoppingBag from '../../Assests/hero-gif/online-shopping (1).png';
// import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import hero from '../../Assests/logo/Dhiyodha (1)n.png';
import ModalLoginButton from './ModalLoginButton';

const MobileMenuPage = ({setMobileMenu}) => {

    const hanleHideMenu = () => {
        setMobileMenu(false)
    
      }

    return (
        <div className='selling-page-mobile-menu-main'>
            <div className='row selling-page-mobile-menu-content'>

                <div className='container-lg container-fluid'>
                    <div className='row mobilemenuTopPad'>
                        <div className='col-8 col-sm-10 col-lg-10'>
                            <div className='selling-header-logo-area ps-2'>
                                <img src={hero} alt='logo' />
                            </div>
                        </div>
                        <div className='col-4 col-sm-2 selling-header-menu'>
                            <div className='selling-header-menubtn-area gap-2'  onClick={hanleHideMenu}>
                            <span className='fs-5'>Close</span>
                            {/* <AiFillCloseCircle className='selling-closemenubtn-style' onClick={hanleHideMenu} /> */}
                            <AiOutlineCloseCircle className='selling-closemenubtn-style'/>
                            </div>
                        </div>
                    </div>
                </div>


                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Home</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                       

                            <div className='d-flex align-items-center'>
                                <div className='home-content-img '>
                                    <img src={shoppingBag} alt='home-content' />
                                </div>
                                <div className='home-content-detail ps-1'>
                                    <h1>Home</h1>
                                </div>
                            </div>
                            <div className='border-bottom-random'></div>
                            <div className='col-12'>
                                <div className='home-content-links'>
                                    <ul>
                                        <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                        <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                        <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                        <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    </ul>
                                </div>
                            </div>

                       
                    </AccordionDetails>
                </Accordion>
                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Services</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <div className='d-flex align-items-center'>
                            <div className='home-content-img'>
                                <img src={shoppingBag} alt='home-content' />
                            </div>
                            <div className='home-content-detail'>
                                <h1>Services</h1>
                            </div>
                        </div>
                        <div className='border-bottom-random'>  </div>
                        <div className='col-12'>
                            <div className='home-content-links'>
                                <ul>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                </ul>
                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>
                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Finance</Typography>
                    </AccordionSummary>
                    <AccordionDetails>


                        <div className='d-flex align-items-center'>
                            <div className='home-content-img'>
                                <img src={shoppingBag} alt='home-content' />
                            </div>
                            <div className='home-content-detail'>
                                <h1>Finance</h1>
                            </div>
                        </div>
                        <div className='border-bottom-random'></div>
                        <div className='col-12'>
                            <div className='home-content-links'>
                                <ul>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                </ul>
                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>
                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Support</Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        <div className='d-flex align-items-center'>
                            <div className='home-content-img'>
                                <img src={shoppingBag} alt='home-content' />
                            </div>
                            <div className='home-content-detail'>
                                <h1>Support</h1>
                            </div>
                        </div>
                        <div className='border-bottom-random'></div>
                        <div className='col-12'>
                            <div className='home-content-links'>
                                <ul>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                </ul>
                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>
                <Accordion className='py-2'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Contact</Typography>
                    </AccordionSummary>
                    <AccordionDetails>


                        <div className='d-flex align-items-center'>
                            <div className='home-content-img'>
                                <img src={shoppingBag} alt='home-content' />
                            </div>
                            <div className='home-content-detail'>
                                <h1>Contact</h1>
                            </div>
                        </div>
                        <div className='border-bottom-random'> </div>
                        <div className='col-12'>
                            <div className='home-content-links'>
                                <ul>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                    <li><Link to='#' className='home-content-childlink'>Card</Link></li>
                                </ul>
                            </div>
                        </div>

                    </AccordionDetails>
                </Accordion>
                <div className='py-2 ms-3'> 
                   <ModalLoginButton/>
                </div>

            </div>
        </div>
    )
}

export default MobileMenuPage