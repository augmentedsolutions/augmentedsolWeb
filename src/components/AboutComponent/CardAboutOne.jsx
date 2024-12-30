import React from 'react'
import CardABoutText from './CardABoutText'
import '../../index.css'
const CardAboutOne = ({img}) => {
  return (
    <div className="">
        <div
          className="row gy-4 gy-lg-0 align-items-lg-center"
          style={{ position: "relative" }}
        >
          <div className="col-12 col-lg-6 text-lg-start text-center">
          <img src={img} width='90%' height='auto' />
          </div>
          <div className="col-12 col-lg-6 col-xxl-6 text-lg-start text-center">
          <div className="about-wrapper">
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

// <div className='row '>
//       <div className= 'MarginContainer col-lg-6 text-center' style={{display:'flex',justifyContent:'center',alignItems:'center'}} >
//          <img src={img} width='90%' height='auto' />
//       </div>
//       <div className='col-lg-6'>
     
          //  <div className='row'>
           
          //    <div className='12'>
          //     <CardABoutText text='Our Story' paragraph='  We are a specialized software company at the forefront of augmented
          // reality (AR) technology, With a passion for innovation and a deep
          // understanding of the power of AR, we are dedicated to creating
          // exceptional digital'/>
          //    </div>
          //  </div>
//       </div>
//     </div>