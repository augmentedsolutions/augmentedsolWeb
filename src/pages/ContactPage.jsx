import React from 'react'
import '../index.css'
import HeroSectionService from '../components/ServiceComponents/HeroSectionService'
import ContactImage1 from '../assets/Contact/ContactImage1.png'
import ContactImage2 from '../assets/Contact/ContactImage2.png'
import ContactForm from '../components/ContactComponent/ContactForm'
const ContactPage=()=>{
return(
     <div className='row Container'> 
         <div className='col-12'>
           <div className='row MarginContainer'>
             <div className='col-12 '>
                <HeroSectionService img={ContactImage1} text1='Contact' text2='Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut.'/>
             </div>
           </div>

           <div className='row MarginContainer' style={{position:'relative',top:'-150px', display:'flex',justifyContent:'center',alignItems:'center',zIndex:'1'}} >
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
     </div>
)
}
export default ContactPage
