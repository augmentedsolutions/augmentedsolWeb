import React from 'react'
import HeroSectionService from '../components/ServiceComponents/HeroSectionService'
import { useLocation } from 'react-router-dom'
import DetailPagePortfolio from '../components/PortfolioCardDetailsComponent/DetailPagePortfolio'

const PortfolioCardDetail = () => {
    const location=useLocation()
    // console.log( "data from Home Page",JSON.stringify(location.state.item.image))
    const recieveData =location.state.item;
    console.log("image",recieveData.image)
  return (
    <div className="row " style={{ position: "relative" }}>
    <div className="col-12 ">
      <div className="row Container MarginContainer">
        <div className="col-12 p-0 ">
          <HeroSectionService
            img={recieveData.image}
            text1={recieveData.projectName}
            text2="Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut. Lorem ipsum dolor sit amet consectetur. Lorem urna dui vel ut feugiat ut."
          />
        </div>
      </div>
      <div className="row Container MarginContainer">
        <div className="col-12 p-0 ">
        <DetailPagePortfolio data={recieveData}/>
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

export default PortfolioCardDetail