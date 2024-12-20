import React from 'react'
import '../../../index.css'
const ClientCard = ({Img}) => {
  return (
    
      <div className= 'Flex col-2 backgroundClientCard' style={{height:'140px', margin:'20px 20px 20px 20px'}}>
          <img src={Img}/>
      </div>
   
  )
}

export default ClientCard