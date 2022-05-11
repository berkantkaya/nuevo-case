import React from 'react'
import ChooseNext from '../components/ChooseNext'
import CircleColor from '../components/CircleColor'
import imageText from '../images/IBIZA@2x.png'
import image from '../images/red-car.png'

const Colors = () => {

  return (
    <div className='colors'>
        <p className='colors__text'>Hayalindeki araca dair rengini seç, tarzını hemen yansıt</p>
        <div className='colors__sub'>
         <img src={imageText} alt="" />
         <img src={image} alt="" />
       </div>
        <div className='colors__circle'>
          <CircleColor color = "#B40F14"  tick = {true}/>
          <CircleColor color = "#1C1C1C"  tick = {false}/>
          <CircleColor color = "#C8C8C8"  tick = {false}/>
       </div>
     <ChooseNext buttonText="ACCESSORIES"/>
    </div>
  )
}

export default Colors