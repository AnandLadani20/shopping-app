import React from 'react'
import Navbar from './Navbar'
import HeroPage from './HeroPage'
import './../../CSS/index.css'

const HomePage = () => {
  return (
    <>
      <section className='new-hero-page-area'>
        <Navbar />
        <HeroPage />
      </section>
    </>
  )
}

export default HomePage