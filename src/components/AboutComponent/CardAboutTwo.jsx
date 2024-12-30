import React from 'react'
import CardABoutText from './CardABoutText'
import '../../index.css'
const CardAboutTwo = ({img}) => {
  return (
    <div className="">
    <div
      className="row gy-4 gy-lg-0 align-items-lg-center"
      style={{ position: "relative" }}
    >
      <div className="col-12 col-lg-6 text-lg-start text-center ">
      <div className="about-wrapper">
      <CardABoutText text='About Augmented' paragraph='We are a specialized software company at the forefront of augmented reality (AR) technology, With a passion for innovation and a deep understanding of the power of AR, we are dedicated to creating exceptional digital '/>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xxl-6 text-lg-start text-center">

      <img src={img} width='90%' height='auto' />
     
      </div>
    </div>
    </div>
  )
}

export default CardAboutTwo




