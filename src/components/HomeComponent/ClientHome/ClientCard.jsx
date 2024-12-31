import React from 'react'
import '../../../index.css'
const ClientCard = ({Img}) => {
  return (
    
      <div className='col-3 col-lg-3 backgroundClientCard ' style={{display:'flex',justifyContent:'center',alignItems:'center',width:'200px',height:'140px'}}>
          <img  src={Img} className='' height='140px' width='auto'/>
      </div>
   
  )
}

export default ClientCard