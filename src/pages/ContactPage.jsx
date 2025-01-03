import React from 'react'
import '../index.css'
import HeroSectionService from '../components/ServiceComponents/HeroSectionService'
import ContactImage1 from '../assets/Contact/ContactImage1.png'
import ContactImage2 from '../assets/Contact/ContactImage2.png'
import ContactForm from '../components/ContactComponent/ContactForm'
import '../components/ContactComponent/ContactComponent.css'
const ContactPage=()=>{
return(
  

  <div className="row Container" style={{ position: "relative" }}>
         <div className='col-12'>
           <div className='row '>
             <div className='col-12 p-0 '>
                <HeroSectionService img={ContactImage1} text1='Contact' text2='Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut.'/>
             </div>
           </div>

           <div className='row MarginContainer ContactForm' style={{ display:'flex',justifyContent:'center',alignItems:'center',zIndex:'1'}} >
             <div className='col-11 backgroundCOntactForm PaddingAllContainer'>
                 <ContactForm/>
             </div>
           </div>

           <div className='row MarginContainer'>
             <div className='col-12'>
             <HeroSectionService img={ContactImage2}/>
             </div>
           </div>


         </div>
         <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            top: "250px",
            left: "-600px",
            zIndex:'-1'
            // backgroundColor:"red"
          }}
          ></div> 
          <div
          className="gradient_radial"
          style={{
            height: "950px",
            width: "950px",
            position: "absolute",
            top: "400px",
            right: "-600px",
            zIndex:'-1'
            // backgroundColor:"red"
          }}
          ></div> 

     </div>

)
}
export default ContactPage
