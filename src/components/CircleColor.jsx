import React from 'react'
import images from '../images/confirm.png'

const CircleColor = ({color, tick}) => {
  return (
    <div style={{backgroundColor:color,borderRadius:'50%',width:'33px',height:'33px',position:'relative',margin:'5px'}}>
       {
           tick && <img style={{position:'absolute',top:'-10px',left:'-10px',backgroundColor:'black',borderRadius:'50%',width:'22px',height:'22px',padding:'3px',border:'3px solid white',zIndex:1000}} src={images} alt="" />
       }
    </div>
  )
}

export default CircleColor