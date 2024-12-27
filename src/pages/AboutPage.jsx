import React from 'react'
import '../index.css'
import HeroSectionService from '../components/ServiceComponents/HeroSectionService'
import HeroSectionImage from '../assets/About/HeroSectionImage.png'
import CardAboutOne from '../components/AboutComponent/CardAboutOne'
import AboutImage from '../assets/About/AboutImage.png'
import CardAboutTwo from '../components/AboutComponent/CardAboutTwo'


const AboutPage=()=>{
    return(
      <div style={{ overflow: "hidden" }}>

        <div className='row Container'>
          <div className='col-12'>
          <div className='row '>
             <div className='12 MarginContainer '>
              <HeroSectionService img={HeroSectionImage} text1='About' text2='Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut.'/>
             </div>
             <div className='12 MarginContainer '>
             <CardAboutOne img={AboutImage}/>
             </div>
             <div className='12 MarginContainer '>
             <CardAboutTwo img={AboutImage}/>
             </div>
           </div>

           
          </div>
        </div>
      </div>
    )
}
export default AboutPage