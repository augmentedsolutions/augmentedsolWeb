import React from 'react'
import CardABoutText from './CardABoutText'
import '../../index.css'
const CardAboutOne = ({img}) => {
  return (
    <div className='row'>
      <div className='col-6 text-center'>
         <img src={img} width='100%'/>
      </div>
      <div className='col-6'>
     
           <div className='row'>
           
             <div className='12'>
              <CardABoutText text='Our Story' paragraph='  We are a specialized software company at the forefront of augmented
          reality (AR) technology, With a passion for innovation and a deep
          understanding of the power of AR, we are dedicated to creating
          exceptional digital'/>
             </div>
           </div>
      </div>
    </div>
  )
}

export default CardAboutOne