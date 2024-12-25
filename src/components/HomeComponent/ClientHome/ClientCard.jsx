import React from 'react'
import '../../../index.css'
const ClientCard = ({Img}) => {
  return (
    
      <div className='col-5 col-lg-2 backgroundClientCard m-2' style={{display:'flex',justifyContent:'center',alignItems:'center',width:'200px',height:'140px'}}>
          <img  src={Img} height='120px' width='200px'/>
      </div>
   
  )
}

export default ClientCard