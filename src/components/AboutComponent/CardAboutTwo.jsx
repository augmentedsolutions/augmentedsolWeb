import React from 'react'
import CardABoutText from './CardABoutText'
import '../../index.css'
const CardAboutTwo = ({img}) => {
  return (
    <div className='row'>
      <div className='col-6'>
     
           <div className='row d-flex align-items-center'>
           
             <div className='12' >
              <CardABoutText text='About Augmented' paragraph='We are a specialized software company at the forefront of augmented reality (AR) technology, With a passion for innovation and a deep understanding of the power of AR, we are dedicated to creating exceptional digital '/>
             </div>
           </div>
      </div>
      <div className='col-6 text-center'>
         <img src={img} width='100%' />
      </div>
    </div>
  )
}

export default CardAboutTwo