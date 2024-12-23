import React from 'react'
import '../../index.css'
const Logo = ({logo}) => {
  return (
    <div className='background_gradient_two d-flex justify-content-center align-items-center' style={{height:'45px',width:'45px',borderRadius:'100px', }}>
       <img src={logo}/>
    </div>
  )
}

export default Logo