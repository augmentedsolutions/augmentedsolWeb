import React from 'react'
import "../../../index.css";
import ServiceImage from '../../../assets/Home/Service Bacground.png'
const ServiceCard = ({image}) => {
  return (
    <div className='row'>
       <div className='col-11' style={{position:'relative', backgroundImage:`url(${image})`, height:'464px', backgroundSize: "cover",}}>
        <div className='row ' style={{position:'absolute', bottom:0, filter:''}} >
          <div className='col-6 ' style={{backgroundImage:`url(${ServiceImage})`, backgroundSize: "cover"}}>
            <p className='text_paragraph'>
            Web Development
            </p >
            <p className='text_paragraph'>
            A Network of 3D virtual worlds focused on social connection. 
            </p>
          </div>
        </div>
        </div>    
     </div>
  )
}

export default ServiceCard