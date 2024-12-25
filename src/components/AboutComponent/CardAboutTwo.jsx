import React from 'react'
import CardABoutText from './CardABoutText'
import '../../index.css'
const CardAboutTwo = ({img}) => {
  return (
    <div className='row'>
      <div className='col-12 col-lg-6'>
     
           <div className='row d-flex align-items-center'>
           
             <div className='12' >
              <CardABoutText text='About Augmented' paragraph='We are a specialized software company at the forefront of augmented reality (AR) technology, With a passion for innovation and a deep understanding of the power of AR, we are dedicated to creating exceptional digital '/>
             </div>
           </div>
      </div>
      <div className='MarginContainer col-lg-6 text-center' style={{display:'flex',justifyContent:"center",alignItems:'center'}}>
         <img src={img}  width='90%' height='auto'/>
      </div>
    </div>
  )
}

export default CardAboutTwo