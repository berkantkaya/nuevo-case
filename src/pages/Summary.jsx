import React from 'react'
import ChooseNext from '../components/ChooseNext'
import imageText from '../images/ibizaText.png'
import image from '../images/red-car.png'
import imageCircle from '../images/Rectangle.png'
import imageBasket from '../images/basket.png'
import SummaryFeature from '../components/SummaryFeature'

const Summary = () => {
  return (
    <div>
     <div className='summary'>
     <div className='summary__sub'>
         <img src={imageText} alt="" />
         <img src={image} alt="" />
         <img src={imageCircle} alt="" />
       </div>
       <div className='summary__right'>
           <SummaryFeature text="MODEL" description="Ibiza 1.3 Ecotech DSG"/> 
           <SummaryFeature text="COLOR" description="Rose Red"/> 
           <SummaryFeature text="ACCESSORIES" description="Boost Pack + Light Plus"/> 
       </div>
     </div>
     <ChooseNext buttonText="BUY NOW" imageIcon= {imageBasket}/>

    </div>
  )
}

export default Summary