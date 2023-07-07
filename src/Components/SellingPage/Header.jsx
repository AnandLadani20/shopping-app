import React from 'react'
import hero from '../../Assests/logo/Dhiyodha white.png';
import MenuPage from './MenuPage';




const Header = () => {
  return (
    <>
          <section className='selling-header-page-area'>
             <div className='container'>
               <div className='row'>
                 <div className='col-10'>
                    <div className='selling-header-logo-area'>
                       <img src={hero} alt='logo'/>
                    </div>
                 </div>
                 <MenuPage/>
               </div>
             </div>
          </section>
     
    </>
  )
}

export default Header