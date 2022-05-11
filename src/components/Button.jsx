import React from 'react'
import images from '../images/rightArrow.png'

const Button = ({btnText,imageIcon}) => {
  return (
    <div className='btn'>
        <span>{btnText}</span>
        <img src={imageIcon ? imageIcon :images} alt="" />
        </div>
  )
}

export default Button