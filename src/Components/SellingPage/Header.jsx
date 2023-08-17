import React, { useState } from 'react'
import hero from '../../Assests/logo/Dhiyodha white.png';
import MenuPage from './MenuPage';
import { GiHamburgerMenu } from 'react-icons/gi';

import MobileMenuPage from './MobileMenuPage';




const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  // const [mobilewidth,setMobileWidth] = useState("0%")

  const handleShowMenu = () => {
    setMobileMenu(true)
  }

  return (
    <>
      <section className='selling-header-page-area'>
        <div className='container-lg container-fluid'>
          <div className='row'>
            <div className='col-10 col-lg-10'>
              <div className='selling-header-logo-area'>
                <img src={hero} alt='logo' />
              </div>
            </div>
            <div className='col-2 selling-header-menu'>
              <div className='selling-header-menubtn-area'>
              <GiHamburgerMenu className='selling-menubtn-style' onClick={handleShowMenu} />
              </div>
            </div>
            <MenuPage />
          </div>
          <div className='row'>
            <div className='col-12'>
              <div className={mobileMenu ? 'selling-page-mobile-menubar activeMenu' : 'selling-page-mobile-menubar'} >
                <MobileMenuPage setMobileMenu={setMobileMenu} />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Header