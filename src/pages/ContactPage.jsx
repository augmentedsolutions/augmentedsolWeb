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
                <HeroSectionService img={ContactImage1}/>
             </div>
           </div>

           <div className='row MarginContainer' style={{position:'relative',top:'-90px', display:'flex',justifyContent:'center',alignItems:'center'}} >
             <div className='col-10 backgroundCOntactForm'>
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
