import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
    const location = useLocation();
    const [colorChange, setColorChange] = useState(0);


    console.log(location);
    // navbar text parameters
    const navbarText = [
        {
            id:0,
            name:'MODELS',
            redirect:'/'
        },
        {
            id:1,
            name:'COLORS',
            redirect:'colors'
        },
        {
            id:2,
            name:'ACCESSORIES',
            redirect:'accessories'
        },
        {
            id:3,
            name:'SUMMARY',
            redirect:'summary'
        }
     ]

     const navbarTextClick = (nav,index) => {
        navigate(nav.redirect);
        setColorChange(nav.id)
        // if(location.pathname == nav.redirect){
        //     setColorChange('black')
        // }else{
        //     setColorChange('red')
        // }
     }

  return (
    <div className='navbar'>
       <div className='navbar__container'>
           {
               //yazdırma işlemi ayrı bir component icinde yapılabilirdi.Simdilik vakit kaybetmek istemedim
               navbarText.map((nav,index) => (
                   <div style={colorChange == nav.id ? {color:'black'} : {color:'lightgray'}} onClick={()=>navbarTextClick(nav,index)} className='navbar__text' key={index}> 
                       {nav.name}
                        {/* burada farklı bir css göstermek icin kücük bir inline css kullanmak istedim */}
                          {colorChange == nav.id ? <hr className='hr-design' style={{position:'absolute',top:'25%',textAlign:'center',width:'20px', height:'5px', fontWeight:'bold',backgroundColor:'black',border:'none'}}/> : ''}  
                       </div>
               ))
           }
       </div>
    </div> 
  )
}

export default Navbar