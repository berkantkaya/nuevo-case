import React from 'react'
import ChooseNext from '../components/ChooseNext'
import imageText from '../images/ibizaText.png'
import image from '../images/red-car.png'
import imageCircle from '../images/Rectangle.png'
import imageOpacity from '../images/opacityImage.png'
import imageConfirm from '../images/confirm.png'

const Models = () => {

  return (
    <div>
     <div className='models'>
     <div className='models__sub'>
         <img src={imageText} alt="" />
         <img src={image} alt="" />
         <img src={imageCircle} alt="" />
         <img src={imageConfirm} alt="" />
         <div>
             <p>
                 <strong>193.500 TL</strong>' den başlayan fiyatlarla
             </p>
             <button>SELECT</button>
         </div>
       </div>
       <div className='models__right'>
          <img src={imageOpacity} alt="" />
       </div>
     </div>

     <ChooseNext buttonText="COLORS"/>
    </div>
  )
}

export default Models