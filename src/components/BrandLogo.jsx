import React from 'react'
import images from '../images/logo.png'
import '../scss/styles.css'


const BrandLogo = () => {
  return (
    <div className='brand__container'>
        <div className='brand__round'></div>
        <img className='brand__logo' src={images} alt="" />
    </div>
  )
}

export default BrandLogo