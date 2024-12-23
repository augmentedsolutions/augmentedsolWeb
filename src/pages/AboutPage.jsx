import React from 'react'
import '../index.css'
import HeroSectionService from '../components/ServiceComponents/HeroSectionService'
import HeroSectionImage from '../assets/About/HeroSectionImage.png'
import CardAboutOne from '../components/AboutComponent/CardAboutOne'
import AboutImage from '../assets/About/AboutImage.png'
import CardAboutTwo from '../components/AboutComponent/CardAboutTwo'


const AboutPage=()=>{
    return(
        <div className='row Container'>
          <div className='col-12'>
          <div className='row'>
             <div className='12 py-3'>
              <HeroSectionService img={HeroSectionImage}/>
             </div>
             <div className='12 py-3'>
             <CardAboutOne img={AboutImage}/>
             </div>
             <div className='12 py-3'>
             <CardAboutTwo img={AboutImage}/>
             </div>
           </div>

           
          </div>
        </div>
    )
}
export default AboutPage