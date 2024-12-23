import React from 'react'
import bgImage from '../../../assets/Home/ClientBGHand.png'
import '../../../index.css'
const ClientCardThree = () => {
  return (
    <div className='row'  >
        <div className='col-6'>
          <div className='row'> 
           <div className='col-12'>
            <div className='row'>
               <div className='col-8'>
               <h1 className='text_tertiary'>
               Explore product in 
               new way
               </h1>
               </div>
               <div className='col-12'>
               <p className='text_paragraph_sixth'>
               We specialize in creating visual identities for products and branda in your company.
               </p>
               </div>
               <div className='col-12'>
                <div className='row'>
                  <div className='col-6'>

               <input type='text' className='background_gradient_one' style={{height:'50px',width:'100%'}}/>
                  </div>
                </div>
               </div>
            </div>
           </div>
          </div>
        </div>
        <div className='col-6'>
            {/* <img src={bgImage} /> */}
        </div>

    </div>
  )
}

export default ClientCardThree