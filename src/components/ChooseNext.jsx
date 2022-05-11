import React from 'react'
import images from '../images/miniRedCar.png'
import Button from './Button'

const ChooseNext = ({buttonText,imageIcon}) => {
    console.log('imageIcon', imageIcon)
  return (
    <div className='chooseNext'>
        <div className='chooseNext__left'>
        <img src={images} alt="" />
        <div className='chooseNext__price'>
            <p className='chooseNext__total'>TOTAL</p>
            <p className='chooseNext__sub-price'>193.500 TL</p>
        </div>
        </div>
        <Button btnText = {buttonText} imageIcon={imageIcon}/>
        <p className='new_text'>
           NEW
        </p>
    </div>
  )
}

export default ChooseNext