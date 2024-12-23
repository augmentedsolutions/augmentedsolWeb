import React from 'react'
import '../../../index.css'
const ClientCard = ({Img}) => {
  return (
    
      <div className='col-2 backgroundClientCard' style={{margin:'20px 20px 20px 20px'}}>
          <img src={Img}/>
      </div>
   
  )
}

export default ClientCard