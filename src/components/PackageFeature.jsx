import React from 'react'
import images from '../images/confirm.png'

const PackageFeature = ({title,price,color,textColor}) => {
  return (
    <div className='packageFeature'>
        <div style={{backgroundColor:color,color:textColor}} className='packageFeature__sub'>
        <p>{title}</p>

        <div className='packageFeature__subDiv'>
        <p>{price}</p>
        <div className='packageFeature__img'>
           <img src={images} alt="" />
        </div>
        </div>
        </div>
         
    </div>
  )
}

export default PackageFeature